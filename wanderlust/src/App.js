import logo from "./logo.svg";
import "./App.css";
import Payment from "./Component/Payment";
import PlaceCard from "./Component/PlaceCard";
import Hotel from "./Component/Hotels";
import Details from "./Component/Details";
// import Payment from './Component/Payment';
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />

      {/* <Payment/>
      <PlaceCard/> */}
      {/* <Hotel/> */}
      {/* <Details/> */}
    </div>
  );
}

export default App;
