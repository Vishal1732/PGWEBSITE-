import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const PaymentCard = () => {
  const [stateName, setStateName] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    axios
      .get('/booking/indianStateNames')
      .then((response) => {
        const states = Array.isArray(response.data) ? response.data : [];
        setStateName(states);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);






  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };
  return (<>
  <Navbar/>

    <form className="row g-3" style={{ width: "100%", height: "456px", border: " 1px solid grey", backgroundColor: "#9acf96" }}>
      <h2>CUSTOMER INFORMATION</h2>
      <div className="col-md-4">
        <label htmlFor="validationDefault01" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationDefault01"
          placeholder='First Name'
          required
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationDefault02"
            placeholder='Last Name'
          required
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefaultUsername" className="form-label">
         Email
        </label>
        <div className="input-group">
          <input
            type="email"
            className="form-control"
            id="validationDefaultUsername"
            aria-describedby="inputGroupPrepend2"
            placeholder='Enter email'
            required
          />
        </div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">
           Contact Number
        </label>
        <input
          type="phone"
          className="form-control"
          id="validationDefault02"
            placeholder='+91123456789'
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="validationDefault03" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="validationDefault03"
          required
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="validationDefault04" className="form-label">
          State
        </label>
        <select
          className="form-select"
          id="validationDefault04"
          value={selectedState}
          onChange={handleStateChange}
          required
        >
          <option disabled value="">
            Choose...
            </option>
            {stateName.map((state, index) => (
              <option key={index}>{state}</option>
            ))}
        </select>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationDefault05" className="form-label">
          Zip
        </label>
        <input
          type="text"
          className="form-control"
          id="validationDefault05"
          placeholder='Pin code'
          required
        />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck2"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <div className="col-12">
      <Link to="/Payment"  className="btn btn-primary" type="submit">Next</Link>
      </div>
    </form>
    <Footer/>
    </>
  );
};

export default PaymentCard;
