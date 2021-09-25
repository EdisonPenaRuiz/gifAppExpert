import React, { useState } from "react";

export const AddCategory=({setAnimales})=>{

    //Variables
    const [categoria,setCategoria]=useState('');

    //Eventos
    const OnChangeTextInput=(e)=>{
        setCategoria(e.target.value);
    }

    const EnviarFormulario=(e)=>{
        e.preventDefault();

        if(categoria.trim().length > 0){
            setAnimales(animales => [categoria,...animales] );
        }
        
       
    }


    return (
      <>
        <form onSubmit={EnviarFormulario}>
          <input
            type="text"
            value={categoria}
            onChange={OnChangeTextInput}
          ></input>
        </form>
      </>
    );
}