import { useState,useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import PaymentCard from './PaymentCard';
import { Link } from "react-router-dom";
import axios from 'axios';

const PriceRoom = () => {
  const [data, setData] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [girlShow,setGirlShow] = useState(false);
  const [boyShow,setBoyShow] = useState(true);
  const [girlData,setGirlData]=useState([]);
     
  const handleShowPayment = () => {
    setShowPayment(true);
  };

const handleGirl = () => {
    setGirlShow(true);
    setBoyShow(false);
  };
  
  const handleBoy = () => {
    setBoyShow(true);
    setGirlShow(false);
  };
  

  useEffect(() => {
    axios
      .get('/price/boysPriceData')
      .then((response) => {
        const states = Array.isArray(response.data) ? response.data : [];
       setData(states);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);


  useEffect(() => {
    axios
      .get('/price/girlsPriceData')
      .then((response) => {
        const states = Array.isArray(response.data) ? response.data : [];
       setGirlData(states);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);
  

  return (
    <>
      <Navbar />
      <div className='faclitybbg'>
      <button type="button" className="btn btn-success" onClick={handleGirl}>Girls</button>
      <button type="button" className="btn btn-warning"onClick={handleBoy}>Boys</button>
      </div>
      
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center" style={{ backgroundColor: 'grey', padding:"95px" }}>
   
    {girlShow && girlData.map((item, index) => (
          <div className="col" key={index}>
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">{item.roomsize}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title"><b>₹</b>{item.price}<small className="text-body-secondary fw-light">{item.month}</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>{item.room}</li>
                  <li><b>{item.food}</b></li>
                  <li>{item.internet}</li>
                  <li>{item.fresh}</li>
                  <li>{item.helpus}</li>
                </ul>
                <Link to="/Booking" className="w-100 btn btn-lg btn-outline-primary">Booking</Link>
              </div>  
            </div>
          </div>
        ))}


       { boyShow && data.map((item, index) => (
          <div className="col" key={index}>
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">{item.roomsize}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title"><b>₹</b>{item.price}<small className="text-body-secondary fw-light">{item.month}</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>{item.room}</li>
                  <li><b>{item.food}</b></li>
                  <li>{item.internet}</li>
                  <li>{item.fresh}</li>
                  <li>{item.helpus}</li>
                </ul>
                <Link to="/Booking" className="w-100 btn btn-lg btn-outline-primary">Booking</Link>
              </div>  
            </div>
          </div>
        ))}

        {showPayment && <PaymentCard />}
      </div>
      <Footer />
    </>
  );
};

export default PriceRoom;