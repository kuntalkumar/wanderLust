// import React from 'react'
// import "./Payment.css"

// const Payment = () => {
//   return (
//     <div className='container'>
//       <h1 className="heading">Hi</h1>


//     </div>
//   )
// }

// export default Payment

import React, { useState } from 'react';

const AddressForm = () => {
  const [num, setNum] = useState('');
  const [home, setHome] = useState('');
  const [area, setArea] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(true);
  const [arrAddress, setArrAddress] = useState(JSON.parse(localStorage.getItem('address')) || []);

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
    }

    localStorage.setItem('address', JSON.stringify(arrAddress));

    // Perform your navigation logic here
    window.location.href="./Component/Details.jsx"
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <div id="body1">
        <div className="store_div">
          <p>Address</p>
          <p><input type="number" placeholder="Pincode" value={num} onChange={(e) => setNum(e.target.value)} className="input_store" required /></p>
          <p><input type="text" placeholder="House/Flat/Office No" value={home} onChange={(e) => setHome(e.target.value)} className="input_store" required /></p>
          <p><input type="text" placeholder="Road Name/Area/Colony" value={area} onChange={(e) => setArea(e.target.value)} className="input_store" required /></p>
        </div>
        <div className="store_div">
          <p>Contact</p>
          <p>Information provided here will be used to contact you for delivery updates</p>
          <p><input type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="input_store" required /></p>
          <p><input type="number" placeholder="Mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} className="input_store" required /></p>
          <p><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input_store" required /></p>
        </div>
        <button id="address_btn" type="submit">Ship to this address</button>
      </div>
    </form>
  );
};

export default AddressForm;
