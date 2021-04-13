import React from 'react';
import './PhotoCard.css'
export const PhotoCard = ({photo}) => {
    return  <div  className="photo-card" 
                style={{backgroundImage: `url(${photo.urls.thumb})`}}>
    </div>
}