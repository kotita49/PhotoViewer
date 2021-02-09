import { ImageUrls } from './PhotoViewer.js';
import React, { useState } from 'react';

let urlImages = [
    1, 3, 4, 5, 6, 7, 8
];
 let urls = [];
    for (let i = 0; i < 50; i++) {
        if (urlImages.includes(i)) {
            
            urls.push(`https://picsum.photos/id/${i}/200/300.jpg`)
        }
    }

function Images() {
    const [url, setUrl] = useState(urls[0]);
    function changeImage(){
        setUrl(ImageUrls[Math.floor(Math.random()*ImageUrls.length)])
        }
        console.log(ImageUrls)
   return(
       <div id="test">
    {ImageUrls.map((url) => 
 <img onClick={() => setUrl(url)} src={url}/>
       
       )
    }   
    </div>               
     )
    }
    


 

    export {Images}