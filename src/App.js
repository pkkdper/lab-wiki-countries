import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJSON from './countries.json';
import { useState } from 'react';
// import {uuid} from 'uuidv4'

function App() {
  const [countries, setCountries] = useState(countriesJSON);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="countrydetails/:countryId"
              element={
                <div className="CountryDetails">
                  <CountryDetails countries={countries}/>
                </div>
              }
            />
            <Route path="/" element={<CountriesList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
