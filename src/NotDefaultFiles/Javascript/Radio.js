import React, { useState } from 'react';
import '../Styles/Radio.css'; // Import your CSS file

const SingleCheckbox = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default SingleCheckbox;

