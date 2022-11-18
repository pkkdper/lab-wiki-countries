import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import countriesJSON from '../countries.json';
import alpha3Code from '../countries.json';
const CountriesList = () => {
  const [countries, setCountries] = useState(countriesJSON);
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="list-group">
            {/* <Router key={alpha3Code}> */}
            {countries.map((theCountry) => {
              return (
                <Link key ={theCountry.name.official} className='list-group-item list-group-item-action'
                  // key={theCountry.name.official}
                  to={`/countrydetails/${theCountry.alpha3Code}`}
                >
                  {theCountry.name.official}
                </Link>
              );
            })}
            {/* <Route path="/photolist" component={Photolist}/> */}
            {/* </Router>  */}
            {/* <Link to="/">Home</Link>
      {countries.map((theCountry) => {return <p></p>})} */}
            {/* {countries.map((theCountry) => {return <Link to="/country-details:id" country = {theCountry}/>})} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountriesList;
