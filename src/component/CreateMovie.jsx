import React, { useState } from 'react';

function CreateMovie() {
  const [file, setFile] = useState(null);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  console.log( file );

  const handleValue1Change = (e) => {
    setValue1(e.target.value);
  };

  const handleValue2Change = (e) => {
    setValue2(e.target.value);
  };

  const handleValue3Change = (e) => {
    setValue3(e.target.value);
  };

  const handleValue4Change = (e) => {
    setValue4(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('value1', value1);
    formData.append('value2', value2);
    formData.append('value3', value3);
    formData.append('value4', value4);

    console.log( formData );

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Value 1:</label>
        <input type="text" value={value1} onChange={handleValue1Change} />
      </div>
      <div>
        <label>Value 2:</label>
        <input type="text" value={value2} onChange={handleValue2Change} />
      </div>
      <div>
        <label>Value 3:</label>
        <input type="text" value={value3} onChange={handleValue3Change} />
      </div>
      <div>
        <label>Value 4:</label>
        <input type="text" value={value4} onChange={handleValue4Change} />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
}

export default CreateMovie
