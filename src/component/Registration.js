import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import '../css/Registration.css';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8888/api/user/save',formData).then((response)=>{
      console.log(response.data.status);
      // if( response.data.status == 1 ){
        navigate('/lists');
      // }
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
