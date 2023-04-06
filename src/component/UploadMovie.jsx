import React, { useState, useEffect } from "react";
import axios from 'axios';

const UploadMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    actors: "",
    imageFile: null,
  });

  useEffect(()=>{
    console.log(formData);
  }, [formData]);

  const handleInputChange = (e) => {



    if( e.target.name === 'imageFile' ) {

      const file = e.target.files[0];
      setFormData({ ...formData, imageFile: file });

    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }

    
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({ ...formData, imageFile: file });
  // };

  const handleUpload = () => {

    console.log( formData );

    const newformData = new FormData();
    const { title, description, actors, imageFile } = formData;

    newformData.append("title", title);
    newformData.append("description", description);
    newformData.append("actors", actors);
    newformData.append("image", imageFile);
    newformData.append("upoadUrl", 'public/uploads');

    console.log( newformData );

    // Make API call to upload the data and image using Axios
    axios.post("http://localhost:8888/movie_api/V1/setmoviedata.php", 
    newformData)
      .then((response) => {
        // Handle response from the API
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Make Movie</h1>
      <input type="text" placeholder="Tilele" name="title" value={formData.title} onChange={(e) => handleInputChange(e)} />
      <input type="text" placeholder="Description" name="description" value={formData.description} onChange={(e) => handleInputChange(e)} />
      <input type="text" placeholder="Actors" name="actors" value={formData.actors} onChange={(e) => handleInputChange(e)} />
      <input type="file" name = "imageFile" accept="image/*" onChange={(e) => handleInputChange(e)} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadMovie;
