import logo from './logo.svg';
import './App.css';
import { PhotoViewer } from './PhotoViewer/PhotoViewer.js';
import React, { useState } from 'react';
import { Images } from './PhotoViewer/Images.js';


function App() {
  const [url, setUrl] = useState("");
  
  return (
    <div className="App">
      < h1>React Photo Viewer</h1>
      <PhotoViewer src={url} />
      <Images selectedUrl={url} setUrl={setUrl}/>


    </div>

  );
}




export default App;

