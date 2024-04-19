import React, { useState } from 'react';
import './Image-carousel.css';

const images = [
  'https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/392/904/931/illustration-city-landscape-anime-girls-wallpaper-thumb.jpg',
  'https://c4.wallpaperflare.com/wallpaper/760/955/638/artwork-landscape-sky-mountains-wallpaper-thumb.jpg',
    'https://c4.wallpaperflare.com/wallpaper/322/553/159/artwork-fantasy-art-anime-rain-wallpaper-thumb.jpg',
    'https://c4.wallpaperflare.com/wallpaper/266/749/195/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-thumb.jpg',
    'https://c4.wallpaperflare.com/wallpaper/500/200/933/anime-landscape-fantasy-art-rain-wallpaper-thumb.jpg',
    'https://c4.wallpaperflare.com/wallpaper/54/1013/225/anime-anime-girls-artwork-digital-digital-art-hd-wallpaper-thumb.jpg',
    'https://c4.wallpaperflare.com/wallpaper/1020/967/633/digital-art-men-landscape-city-wallpaper-thumb.jpg',
    'https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg'
  // Add more image URLs here
];

function Image_Carousel() {
  const [current, setCurrent] = useState(0);

  const backImg = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const frontImg = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div>
      <div className="container">
        <div >
            {current!==0 && <img className='backImage'  src={images[current+1]}></img>}
        <a className="back" onClick={backImg}>
          <img style={{zIndex:10,opacity:0.6}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueqGqNMAparRWEHIYmH4UPIyrqh-MDuflqg&s" alt="back" />
        </a>
        </div>
        
        <div className="imgContainer">
          <img src={images[current]} alt={`Image ${current}`} />
        </div>
        <div >
        {current!==images.length-1 && <img className='frontImage' src={images[current-1]}></img>}
        <a className="front" onClick={frontImg}>
          <img style={{zIndex:10,opacity:0.6}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-o92ll99sIj3bkYhbXqtL0axJ2lVuhNhevUPdzatNZXEjM_KvXZko-TMUImjHyZzjsXo&usqp=CAU" alt="front" />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Image_Carousel;
