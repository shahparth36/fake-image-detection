require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/api/test", (req, res) => res.send("Working fine!"));

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
