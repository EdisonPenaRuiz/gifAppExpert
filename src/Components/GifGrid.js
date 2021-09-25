import React, { useEffect, useState } from "react";
import { useFechApiGif } from "../hooks/useFechApiGif";
import { GifGridItem } from "./GifGridItem";


export const GifGrid=({categoria})=>{

    const [images,setImages]=useState([]);
    //const {loading} = useFechApiGif();
   
    useEffect(()=>{
        GetGifs();
    },[]);

    const GetGifs =async()=>{
        const urlRaice='http://api.giphy.com/v1/gifs/search';
        const apiKey='&limit=10&api_key=rRuEoSsq7XcSNrsReG1es58GLx9xp367';
        const search =`?q=${categoria}`;

        const urlComplete = urlRaice+search+apiKey;

        const resp =await fetch(urlComplete.toString());
        const {data} = await resp.json();
        
        const gifs = data.map(img =>{
            return {
                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url
            }
        });

        setImages(gifs);

        //El userEfectt no permite que al recargar la pagina vuelva a hacer peticiones
    
   }

    return (
      <>
       
        <h1>{categoria}</h1>
        <div className="cardGrid">
          {images.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })}
        </div> 
      </>
    );
}