import React from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';

function PhotoViewer(props) {    // declare a new function called 'PhotoViewer'
    return (                
        <div className='large'>              
      <img src={props.src}/>
        </div>
    );
}

export {PhotoViewer};       // Export the function so that it can be imported in other files