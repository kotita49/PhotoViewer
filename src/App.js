import logo from './logo.svg';
import './App.css';
import { PhotoViewer } from './PhotoViewer/PhotoViewer.js';
import { ImageUrls } from './PhotoViewer/PhotoViewer.js';
import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState(ImageUrls[0]);

  function changeImage(){
  setUrl(ImageUrls[Math.floor(Math.random()*ImageUrls.length)])
}
  
  return (
        
    <div className="App">
      <div>
            <h1>React Photo Viewer</h1>
            <p>The url: {url}</p>
            <p><img src={url}/></p>
            <button onClick={ changeImage }>
        Change Image
      </button>
        </div>
    </div>
  );
}


export default App;
