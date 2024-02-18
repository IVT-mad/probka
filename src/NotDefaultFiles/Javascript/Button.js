import React from 'react';

const Button = ({ name, howmuch, handleConfirm }) => {
    const handleClick = () => {
        if (onConfirm) {
          onConfirm();
        }
      };

    return (
    <button onClick={handleConfirm} className='battn'>{name} {howmuch}$</button>
  );
};

export default Button;
