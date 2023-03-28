import React, { useState } from 'react';

import '../css/EditMovie.css'

function EditMovie() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

 
    const formData = new FormData();
    formData.append('id', 1);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profileImage', profileImage);

    console.log( formData );
    try {
        // console.log( formData );
      const response = await fetch('http://localhost:8888/movie_api/V1/editmovie.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
    //   console.log(data);
      if (data.success) {
        // show success message
      } else {
        // show error message
      }
    } catch (error) {
      console.error(error);
      // show error message
    }
  };

  const handleProfileImageChange = (event) => {

    setProfileImage(event.target.files[0]);

    console.log( event.target.files[0] );
  };



  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor="text">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div>
        <label htmlFor="profile-image">Profile Image:</label>
        <input type="file" id="profile-image" accept="image/*" onChange={handleProfileImageChange} />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditMovie;
