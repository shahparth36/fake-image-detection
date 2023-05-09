import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  }

  const handleClick = async () => {
    const data = new FormData();
    data.append('file', image);

    axios.post('http://localhost:5000/api/test/upload', data)
    .then((res) => {
      setImage(`http://localhost:5000/${res.data.filename}`);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="file" style={{ margin: 20, marginLeft: 100, marginBottom: 10 }} onChange={onImageChange} className="filetype" />
        { image && <img alt="preview image" src={image} /> }
        <a 
          className="App-link"
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit
        </a>
      </header>
    </div>
  );
}

export default App;
