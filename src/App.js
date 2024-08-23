import logo from './logo.svg';
import './App.css';
import Payment from './Component/Payment';
import PlaceCard from './Component/PlaceCard';
import Hotel from './Component/Hotels';

// import Payment from './Component/Payment';
import AllRoutes from './Routes/AllRoutes'
import RazorpayPayment from './Component/Payment/RazorpayPayment';
import Page from './Component/LoginSignup/Page';
import Footer from './Component/Footer/Footer';
// import Navbar from './Component/NavFoot/Navbar';
// import FooterTop from './Component/NavFoot/FooterTop';
// import Footer from './Component/NavFoot/Footer';

function App() {
  return (
    <div className="App">
      <AllRoutes />
   {/* <h1>Hi i am ready</h1> */}
      {/* <Payment/>
      <PlaceCard/> */}
      {/* <Hotel/> */}
      {/* <Details/> */}
      {/* <RazorpayPayment/> */}
      {/* <Navbar/>
      <Page/>
      <FooterTop/>
      <Footer/> */}
    </div>
  );
}

export default App;
