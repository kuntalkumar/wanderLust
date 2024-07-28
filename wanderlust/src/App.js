import logo from './logo.svg';
import './App.css';
import Payment from './Component/Payment';
import PlaceCard from './Component/PlaceCard';
import Hotel from './Component/Hotels';

// import Payment from './Component/Payment';
import AllRoutes from './Routes/AllRoutes'
import RazorpayPayment from './Component/Payment/RazorpayPayment';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
    
   {/* <h1>Hi i am ready</h1> */}
      {/* <Payment/>
      <PlaceCard/> */}
      {/* <Hotel/> */}
      {/* <Details/> */}
      {/* <RazorpayPayment/> */}
    </div>
  );
}

export default App;
