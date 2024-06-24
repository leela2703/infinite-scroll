import React from 'react';

const PhotoItem = ({ photo }) => {
    return (
        <div className="photo-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <h2>{photo.title}</h2>
        </div>
    );
};

export default PhotoItem;
