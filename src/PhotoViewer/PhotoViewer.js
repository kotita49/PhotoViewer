import React from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';

// function PhotoViewer(props) {    // declare a new function called 'PhotoViewer'
//     return (                
//         <div className='large'>              
//       <img src={props.src}/>
//         </div>
//     );
// }

// export {PhotoViewer};       // Export the function so that it can be imported in other files

const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/200/300.jpg`)
        }
    }
    
    return urls;
}

export const ImageUrls = getImageUrls()