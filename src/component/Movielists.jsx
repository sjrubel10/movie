import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

const MovieLists = () => {

    const [getData, setGetData] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:8888/api/user/save').then((response)=>{
            // console.log(response.data);
            setGetData( response.data );        
        })
        
    },[])

    // {console.log(getData)}
    return (
       <>
       <h1>  Movie Lists</h1>
       {
        getData.length> 0 ? (
            getData.map((data) => {

                {console.log(data)}
                <h1 style={{color: "#FFFFFF"}}>fadskfjhakdjsfhajklds</h1>
                
            
            })
        ) :(
            <div className="empty">
                    <h2> No Movies Found</h2>
                </div>
        )
       }
        
       </>
    )
}

export default MovieLists