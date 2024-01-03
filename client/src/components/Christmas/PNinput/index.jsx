
import React, { useState } from 'react';

const PhoneNumberInput = ({ value, onChange }) => {
  const formatPhoneNumber = (input) => {
    const cleanedInput = input.replace(/\D/g, '');
    const match = cleanedInput.match(/^(\d{3})(\d{0,3})(\d{0,4})$/);

    if (match) {
      const formattedNumber = `(${match[1]})${match[2] ? `-${match[2]}` : ''}${match[3] ? `-${match[3]}` : ''}`;
      return formattedNumber;
    }

    return cleanedInput;
  };

  const handleInputChange = (e) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    onChange(formattedValue);
  };

  return (
    <input
      type="text"
      placeholder="(XXX)-XXX-XXXX"
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default PhoneNumberInput;
