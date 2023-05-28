require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const axios = require("axios");
const FormData = require("form-data");
const fs = require('fs/promises');

const { upload } = require('./config');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/api/test", (req, res) => res.send("Working fine!"));

app.post("/api/classify", upload.single('file'), async (req, res, next) => {
  const formData = new FormData();
  const fileName = req.file.filename;

  const file = await fs.readFile(req.file.path);

  formData.append('image', file, `${fileName}`);

  const ML_SERVER_BASE_URL = 'http://ec2-13-235-57-44.ap-south-1.compute.amazonaws.com/api';
  const response = await axios.post(`${ML_SERVER_BASE_URL}/classify`, formData);

  const predictionValue = response.data.prediction;
  const predictionMessage = predictionValue === 0 ? 'Image is not tampered' : 'Image is tampered';

  return res.status(200).json({ message: predictionMessage });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
