import { useState } from 'react';
import '../css/Popup.css';

function Popup() {
  const [showPopup, setShowPopup] = useState(true);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleHidePopup = () => {
    setShowPopup(false);
  };

  alert('Entry Ok');

  return (
    <div>
      <button onClick={handleShowPopup}>Show Popup</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={handleHidePopup}>
              &times;
            </button>
            <p>This is a pop-up message!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup
