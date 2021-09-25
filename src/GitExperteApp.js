import  { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid} from './Components/GifGrid';
import PropTypes from 'prop-types'

export const GitExpertApp=()=>{
    const[animales,setAnimales]=useState([]);

    const HadleAdd = ()=>{
        setAnimales([...animales]);
    }
    return (
        <div>
            <h2>GitExpertApp</h2>
            <hr></hr>
            <AddCategory setAnimales={setAnimales}/>
            <ol>
                {
                    animales.map(animal =>{
                       return <GifGrid key={animal} categoria={animal}/>
                    })
                }
            </ol>
            <button onClick={HadleAdd}>Add</button>
        </div>
    )
}

AddCategory.prototype={
    setAnimales:PropTypes.func.isRequired
}