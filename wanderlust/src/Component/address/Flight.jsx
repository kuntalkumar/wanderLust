import React, { useState } from 'react';
import './Flight.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Flight() {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading,setLoading]=useState(false);
  const [arrowRotated, setArrowRotated] = useState(false);
  const [sortOrder,setSortOrder]=useState("asc");
  const [selectedSort, setSelectedSort] = useState(null);

 const navigate=useNavigate();

  const handleSearch = async(e) => {
    e.preventDefault();

    try{
      setLoading(true);
      const response = await axios.get('https://webdata.onrender.com/flights', {
        params: {
          departure,
          destination,
          date: departureDate,
        },
      });
      console.log(response.data);
      setSearchResults(response.data);
      localStorage.setItem('flightSearch', JSON.stringify({ departure, destination, departureDate }));
    }
    catch(error){
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  };

  const handleExchange=()=>{
    setDestination(departure)
    setDeparture(destination)
    setArrowRotated(!arrowRotated);

  }

  const handleAsc=()=>{
    setSortOrder("asc")
    setSelectedSort("asc")
    setSearchResults([...searchResults].sort((a,b)=>a.price-b.price));

  }

  const handleDesc=()=>{
    setSortOrder("desc")
    setSelectedSort("desc")
    setSearchResults([...searchResults].sort((a,b)=>b.price-a.price));
  }

  const handleSortReset=()=>{
    setSortOrder("asc")
    setSelectedSort(null)
  }


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('flightSearch'));
    if (storedData) {
      setDeparture(storedData.departure);
      setDestination(storedData.destination);
      setDepartureDate(storedData.departureDate);
      
    }
  }, []);
  

  // const handleFlightSelect = (selectedFlight) => {
     
  //   console.log("Selected flight:", selectedFlight);
  // };

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Booking</h1>
      </header>
      <main>
        <section className="search">
          <h2>Search for Flights</h2>
          <form onSubmit={handleSearch}>
          
            <div className='input-group'>
            <label htmlFor="departure">Departure:</label>
            <input type="text" id="departure" value={departure} onChange={(e) => setDeparture(e.target.value)} required />
            </div>

            <div className={`exchange-icon ${arrowRotated ? 'rotated' : ''}`}>
              <button type="button" onClick={handleExchange}>
                <span>&#8645;</span> {/* Double arrow icon */}  
              </button> 
            </div>
            <div className='input-group' >
            <label htmlFor="destination">Destination:</label>
            <input type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} required />
            </div>
            
            <div className='input-group'>
            <label htmlFor="departure-date">Departure Date:</label>
            <input type="date" id="departure-date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
            </div>

            <button className='btn' type="submit">
              {loading? <div><p>Hold on, We are fetching flights for you...</p><img src="https://cdn.dribbble.com/users/1268095/screenshots/4368448/takeoff.gif" alt="loading"/></div> : "SEARCH"}</button>
          </form>
        </section>
        <section className="results">
          <h2>Search Results</h2>
          {searchResults.length>0 && (
            <div className='sort_btn'>
            <button className={selectedSort === "asc" ? "selected" : ""}onClick={handleAsc }>Price-Low to High</button>
            <button className={selectedSort === "desc" ? "selected" : ""}onClick={handleDesc}>Price-High to Low</button>
            <button onClick={handleSortReset}>Reset</button>
          </div>
          )}
          <ul>
            {searchResults.map((flight) => (
              
              <li key={flight.id}>
                <h1>Flight from {departure} to {destination}</h1>
                <div>
                <img width="100px" height="100px" src={flight.image} alt="asia" />
                <p>{flight.flightName}</p>
                <p>Departure: {flight.departureTime}</p>
                <p>Arrival: {flight.landingTime}</p>
                <p>TotalTime: {flight.totalTime}</p>
                <p>Price: ₹ {flight.price}</p>
                <button onClick={()=>navigate("")} className='flight_btn'>Book Now</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Airline. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Flight;


