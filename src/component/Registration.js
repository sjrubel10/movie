import axios from 'axios';

import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import '../css/Registration.css';

// import Popup from './Popup';

function RegistrationForm() {

  
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profileImage: null
  });

  const data  = new FormData();

  useEffect(()=> {
    // console.log( formData );
  }, [formData])

  const handleChange = (event) => {
    if( event.target.name !== 'profileImage' ){
      data.append(event.target.name, event.target.value)
      setFormData(
        {
          ...formData,
        [event.target.name]: event.target.value
        }
      )
    } else{
      data.append(event.target.name, event.target.files[0])
      setFormData(
        {
          ...formData,
        [event.target.name]: event.target.files[0]
        }
      )
    }
  }

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsButtonClicked(true);

    axios.post('http://localhost:8888/movie_api/V1/setmoviedata.php', data )
    .then((response)=>{

      console.log(response.data);
      if( response.data.status === 'success' ){

        alert( response.data.message );
        setIsButtonClicked(false);
        navigate('/lists');

      } else {

        alert( response.data.message );
        // <Popup/>
        setIsButtonClicked(false);

      }

    })
    
  }

  return (
    <form onSubmit={(e)=> handleSubmit(e)}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={(e)=> handleChange(e)} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={(e)=> handleChange(e)} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={(e)=> handleChange(e)} />
      </label>
      <div>
        <label htmlFor="profile-image">Profile Image:</label>
        <input type="file" name="profileImage" id="profile-image" accept="image/*" onChange={(e)=> handleChange(e)} />
      </div>
      <button type="submit"  disabled={isButtonClicked} >Submit</button>
    </form>
  );
}

export default RegistrationForm;
