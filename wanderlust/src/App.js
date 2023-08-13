import logo from './logo.svg';
import './App.css';
import Payment from './Component/Payment';
import PlaceCard from './Component/PlaceCard';
import Hotel from './Component/Hotels';

// import Payment from './Component/Payment';
import AllRoutes from './Routes/AllRoutes'

function App() {
  return (
    <div className="App">
      <AllRoutes/>
    
      {/* <Payment/>
      <PlaceCard/> */}
      {/* <Hotel/> */}
      {/* <Details/> */}
    </div>
  );
}

export default App;
