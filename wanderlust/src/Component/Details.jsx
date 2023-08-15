import React, { useState, useEffect } from 'react';

const AddressForm = () => {
  // ... (other state declarations)

  const handleSubmit = (event) => {
    event.preventDefault();

    const obj = {
      num: num,
      home: home,
      area: area,
      fullName: fullName,
      Mobile: mobile,
      email: email,
    };

    console.log(obj);

    setArrAddress([...arrAddress, obj]);

    console.log(arrAddress);

    if (fullName === '') {
      setFullName('Please enter your name');
      setStatus(false);
    } else {
      setStatus(true);
      document.getElementById('delivery_div').textContent = `${fullName}, ${home}, ${area}, ${num}`;
    }

    localStorage.setItem('address', JSON.stringify(arrAddress));

    // Perform your navigation logic here
  };

  return (
    <div>
      <div id="delivery_div"></div>
      <form onSubmit={handleSubmit} id="form">
        {/* ...Rest of the form */}
      </form>
    </div>
  );
};

export default AddressForm;

