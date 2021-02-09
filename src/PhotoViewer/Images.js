
import React, { useState } from 'react';
import './PhotoViewer.css';

let urlImages = [
    1, 3, 4, 5, 6, 7, 8
];
let urls = [];
for (let i = 0; i < 50; i++) {
    if (urlImages.includes(i)) {

        urls.push(`https://picsum.photos/id/${i}/200/300.jpg`)
    }
}

function Images(props) {

    return (
    <div id="test">
            {urls.map((url) =>
                <img className= {url == props.selectedUrl ? "redBorder" : ""} onClick={() => props.setUrl(url)} src={url} />
            )
            }
        </div>
    )
}





export { Images }