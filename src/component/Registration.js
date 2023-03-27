import axios from 'axios';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import '../css/Registration.css';

import Popup from './Popup';

function RegistrationForm() {

  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleSubmit = (event) => {

    event.preventDefault();

    setIsButtonClicked(true);

    // const urlForMac = 'http://localhost:8888/movie_api/';
    // const urlForMac = 'http://localhost:8888/movie_api/';

    axios.post('http://localhost:8888/movie_api/V1/setmoviedata.php',formData).then((response)=>{

      if( response.data.status === 'success' ){

        alert( response.data.message );
        setIsButtonClicked(false);
        navigate('/lists');

      }else {

        alert( response.data.message );
        <Popup/>
        setIsButtonClicked(false);

      }

    })
    // console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit"  disabled={isButtonClicked} >Submit</button>
    </form>
  );
}

export default RegistrationForm;
