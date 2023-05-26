import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { instance } from './axios';

function App() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(false);
  const [prediction, setPrediction] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setImagePreview(URL.createObjectURL(event.target.files[0]));
    }
  }

  const handleClick = async () => {
    setIsLoading(true);
    const data = new FormData();
    data.append('file', image);

    instance.post('/classify', data)
    .then((res) => {
      setPrediction(res.data.message);
      setIsLoading(false);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="file" accept='image/png, image/jpeg, image/jpg' style={{ margin: 20, marginLeft: 100, marginBottom: 10 }} onChange={onImageChange} className="filetype" disabled={isLoading} />
        { imagePreview && <img alt="preview image" src={imagePreview} /> }
        {prediction && <p style={{ padding: 20 }}>Prediction: {prediction}</p> }
        <button 
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
          disabled={isLoading}
        >
          Submit
        </button>
      </header>
    </div>
  );
}

export default App;
