import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: blue;
    transform: scale(1.1);
  }
`;

const RazorpayPayment = () => {
  const [checkoutAmount, setCheckoutAmount] = useState(50000 * 100);
  const [rzpInstance, setRzpInstance] = useState(null);

  useEffect(() => {
    loadRazorpayScript();
  }, []);

  const loadRazorpayScript = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      initializeRazorpay();
    };
    document.body.appendChild(script);
  };

  const initializeRazorpay = () => {
    const options = {
      key: 'rzp_test_Zn3281xQDVCPcN', // Fetch from your server
      amount: checkoutAmount,
      currency: 'INR',
      name: 'Travel Website',
      description: 'Test Payment',
      image: 'https://your-image-url.com',
      handler: handlePaymentSuccess,
    };

    setRzpInstance(new window.Razorpay(options));
  };

  const handlePaymentClick = (e) => {
    // e.preventDefault();
    if (rzpInstance) {
      rzpInstance.open();
    } else {
      console.error('Razorpay instance is not initialized.');
    }
  };
handlePaymentClick() /// to automatic load payment page without addresspage 
  const handlePaymentSuccess = (response) => {
    console.log('Payment Successful', response);
    // Handle the response, e.g., update UI, make API calls
  };

  return (
    <div>
      {/* <StyledButton onClick={handlePaymentClick}>
        Pay Now
      </StyledButton> */}
    </div>
  );
};

export default RazorpayPayment;
