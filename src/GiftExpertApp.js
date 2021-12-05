import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
  
    return (
        <>
          <h2>Gift Expert App</h2>
          <AddCategory setCategories={setCategories} />
          <hr/>  
            {
              categories.map( category=>
                (<GifGrid key={category}  category={ category } />) 
              )
            }
         
        </>
    )
}
