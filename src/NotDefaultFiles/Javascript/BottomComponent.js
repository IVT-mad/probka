import React, { useState } from 'react';
import '../Styles/BottomComponent.css'
import Button from './Button';

const BottomComponent = ({ onConfirm }) => {
  const [selectedItems, setSelectedItems] = useState(1);
  const [howmuch, sethowmuch] = useState(0);
  const [clicks, setclicks] = useState(0);

  // Click handler to update the value
  const handleMinus = () => {
    if (howmuch > 0) {
      sethowmuch((prevValue) => Math.round((prevValue * 100 - 1299) / 100));
      setclicks((prevValue) => clicks - 1);
    }
  };
  const handlePlus = () => {
    sethowmuch((prevValue) => Math.round((prevValue*100 + 1299))/100);
    setclicks((prevValue) => clicks + 1);
  };

  const handleConfirm = () => {
    // You can perform any action you want when the "Confirm" button is clicked
    // For now, it just logs the selected number of items
    howmuch += 12.99
    console.log(`Confirmed: ${selectedItems} items`);
    // If you want to do something specific, you can call the onConfirm callback
    if (onConfirm) {
      onConfirm(selectedItems);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#f0f0f0', display: 'grid'}}>
      <div className='myElement'><h1 onClick={handleMinus}> - </h1><h1 className='vivoddeneg'>{clicks}</h1><h1 onClick={handlePlus}> + </h1></div>
      <Button name={'Add for'} howmuch={howmuch} handleConfirm={handleConfirm}/>
    </div>
  );
};

export default BottomComponent;
