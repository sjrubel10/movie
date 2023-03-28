import { useState } from 'react';

function CreateMovie() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <div>
      <button
        onClick={() => handleClick(0)}
        style={{ backgroundColor: selectedButton === 0 ? 'red' : 'white' }}
      >
        Button 1
      </button>
      <button
        onClick={() => handleClick(1)}
        style={{ backgroundColor: selectedButton === 1 ? 'red' : 'white' }}
      >
        Button 2
      </button>
      <button
        onClick={() => handleClick(2)}
        style={{ backgroundColor: selectedButton === 2 ? 'red' : 'white' }}
      >
        Button 3
      </button>
      <button
        onClick={() => handleClick(3)}
        style={{ backgroundColor: selectedButton === 3 ? 'red' : 'white' }}
      >
        Button 4
      </button>
      <button
        onClick={() => handleClick(4)}
        style={{ backgroundColor: selectedButton === 4 ? 'red' : 'white' }}
      >
        Button 5
      </button>
    </div>
  );
}


export default CreateMovie
