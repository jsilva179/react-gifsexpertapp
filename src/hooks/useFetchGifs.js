import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
   
    const [state, setstate] = useState({
        data:[],
        loading: true
    })
    //Cannot work with async methodology, but you can use Then...
    useEffect(()=>
    {
        getGifs(category)
        .then(img=> 
        {
            setstate({data:img, loading:false})
        });
    },[category]);

   return state;
}
