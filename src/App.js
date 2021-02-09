import logo from './logo.svg';
import './App.css';
import { PhotoViewer } from './PhotoViewer/PhotoViewer.js';
import { ImageUrls } from './PhotoViewer/PhotoViewer.js';
import React, { useState } from 'react';
import { Images } from './PhotoViewer/Images.js';


function App() {
  
    return (
    <div className="App">
     < h1>React Photo Viewer</h1>
                 <PhotoViewer src={'https://picsum.photos/1200/800'}/>
                 <Images/>
                      
                      
                   </div>
 
  );
}




export default App;

