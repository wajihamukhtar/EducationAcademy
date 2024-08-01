import React, { useState } from 'react';
import SubmitButton from './SubmitButton'; 
import PopUpData from './PopUpData';
const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      <SubmitButton style={{ width: "40%" }} onClick={() => setShowPopUp(true)} text={'open pop-Up'} />
      {showPopUp && <PopUpData setShowPopUp={setShowPopUp} />}
    </>
  );
};

export default PopUp;

