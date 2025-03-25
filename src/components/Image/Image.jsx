import React from 'react';

const Image = ({image}) => {
    return (
        <div className="w-full relative h-auto pt-[80%] bg-gray-100">
            {image ? <img  src={image} alt="new" className="absolute left-0 top-0 w-full h-full object-cover " /> : null}
        </div>
    );
};

export default Image;