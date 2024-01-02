import React, { useState } from 'react';

function ImageUploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
      
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    fetch('http://example.com/upload-image.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUploadForm
