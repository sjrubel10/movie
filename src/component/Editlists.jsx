import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import '../css/Edit.css';

const EditList = () => {

    const navigate = useNavigate();
    const editdataLocation = useLocation();
    // console.log( editdataLocation.state.editdata );
    const data = editdataLocation.state.editdata;

    // const [id] = useState(data.id);
    const [title, setTitle] = useState(data.title);
    const [description, setDescription] = useState(data.description);
    const [actors, setActors] = useState(data.actors);


  

    const update_data = ( updateddata ) => {

        const apiUrl = `http://localhost:8888/movie_api/V1/edit_data.php`;
        const params = {
            updateddata: updateddata
          };
      
        axios.get( apiUrl, {params} ).then((response)=>{
            
        // console.log( response.data.status);

        if( response.data.status === 'success' ) {

            alert( response.data.message );
            navigate('/lists');

        }

        })
    } 

    const handleSubmit = (event) => {
      event.preventDefault();

      const updateddata ={
        id : data.id,
        title : title,
        description : description,
        actors : actors
      }

    //   console.log( updateddata );
      update_data( updateddata ) ;

    };

    const changeTitle = (e) => {

      setTitle(e.target.value);
        // console.log( name);
    }
    const CancelEdit = () => {
        navigate('/lists');
    } 
  
    return (

    <div className="edit-field-holder">
        <div className="cancelBtn" onClick={CancelEdit}>Cancel</div>
        <span className="edittitletext">Edit : { title } </span>
        <form className="formdata" onSubmit={handleSubmit}>
            <label className="perlevel">
            Title:
            <input className="textfield"
                type="text"
                value={title}
                onChange = {changeTitle}
            />
            </label>
            <label className="perlevel">
            Description:
            <input className="textfield"
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            </label>
            <label className="perlevel">
            Actors:
            <input className="textfield"
                type="text"
                value={actors}
                onChange={(event) => setActors(event.target.value)}
            />
            </label>
            <button className="submitBtn" type="submit" >Submit</button>
        </form>
    </div>
      
    );
  };

export default EditList