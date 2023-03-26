import axios from "axios";
import React from "react";

import '../css/Movielists.css';

import { useEffect, useState } from "react";

const MovieLists = () => {

    const [getData, setGetData] = useState([])
    
    useEffect(()=>{

        const apiUrl = `http://localhost/movie_api/V1/setmoviedata.php`;
        const params = {
            id: 123,
            name: 'John Smith',
            email: 'john@example.com',
            phoneNumbers: [
              '555-1234',
              '555-5678'
            ]
          };
        
        axios.get( apiUrl, {params} ).then((response)=>{
            
            setGetData( response.data ); 

        })
        
    },[])

    const onEdit = ( id ) => {
        alert(id+"Edit Clicked");
    }

    const onDelete = ( id ) => {

      const apiUrl = `http://localhost/movie_api/V1/deletemovie.php`;
        const params = {
            deleteId: id
          };
      
        axios.get( apiUrl, {params} ).then((response)=>{
            
        // console.log( response.data.status );

        if( response.data.status === 'success' ) {
          const updatedPosts = getData.filter(post => post.id !== id);
          setGetData( updatedPosts );
        }

        })
      
        
        
        // console.log( updatedPosts ) deletemovie;
    }

    const Display = ({ data }) => {
        return (
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">{data.title}</h3>
              <div className="card-buttons">
                <button onClick={() => onEdit(data.id)}>Edit</button>
                <button onClick= {() => onDelete(data.id)} >Delete</button>
              </div>
            </div>
            <div className="card-body">
              <p className="card-description">{data.description}</p>
              <div className="card-actors">
                <h4>Actors:</h4>
                <ul>
                    <li>{data.actors}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      };

    // console.log(getData.length);

    return (
       <>
       <h1>  Movie Lists</h1>
       
       {
        
        getData.length> 0 ? (
            getData.map((data) => {

                return <Display data = {data} key= {Math.random()}/>
            
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