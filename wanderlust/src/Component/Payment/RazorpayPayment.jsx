import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: blue;
    transform: scale(1.1);

  }
`;

class RazorpayPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkoutAmount: 50000 * 100,
    };

    this.rzpInstance = null;
  }

  componentDidMount() {
    this.loadRazorpayScript();
  }

  loadRazorpayScript = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      this.initializeRazorpay();
    };
    document.body.appendChild(script);
  };

  initializeRazorpay = () => {
    const options = {
      key: 'rzp_test_Zn3281xQDVCPcN', // Fetch from your server
      amount: this.state.checkoutAmount,
      currency: 'INR',
      name: 'Travel Website',
      description: 'Test Payment',
      image: 'https://your-image-url.com',
      handler: this.handlePaymentSuccess,
    };

    this.rzpInstance = new window.Razorpay(options);
  };

  handlePaymentClick = (e) => {
    e.preventDefault();
    if (this.rzpInstance) {
      this.rzpInstance.open();
    } else {
      console.error('Razorpay instance is not initialized.');
    }
  };

  handlePaymentSuccess = (response) => {

    console.log('Payment Successful', response);
    // Handle the response, e.g., update UI, make API calls

  };

  render() {
    return (
      <div>
        <StyledButton onClick={this.handlePaymentClick}>
          Pay Now
        </StyledButton>
      </div>
    );
  }
}

export default RazorpayPayment;
