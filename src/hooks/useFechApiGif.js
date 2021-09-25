import React, { useState } from 'react'

export const useFechApiGif = () => {
    
    const [images,setImages] = useState({
        data:[],
        loading:true
    });
    setTimeout(()=>{setImages({loading:false})},3000);
    return images;
};
