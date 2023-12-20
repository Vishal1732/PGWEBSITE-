import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar';
import { MdPayment } from "react-icons/md";
import axios from 'axios';

 const FinalPayment = () => {
 const [stateName,setStateName]= useState([]);
 const [countdown, setCountdown] = useState(15);
 const [paymentStatus, setPaymentStatus] = useState('');
 
 const handlePayment = () => {
   setPaymentStatus('success');
   
   clearTimeout(timeoutId);
 
   timeoutId = setTimeout(() => {
     setPaymentStatus('');
     setCountdown(15);
   }, 15000);
 };
 
 useEffect(() => {
   const intervalId = setInterval(() => {
     setCountdown((prevCountdown) => {
       if (prevCountdown > 0) {
         return prevCountdown - 1;
       } else {
         return 0; 
       }
     });
   }, 1000);
 
   return () => {
     clearInterval(intervalId);
   };
 }, []);
 
 let timeoutId;

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
 
  return (
    <>
   <Navbar/>
    <header className='headerpayment' >
      <div className='paymentContainer'>
        <div className='left'>
          <h3>BILLING ADDRESS</h3>
          <form>
            Full className
            <input type='text' name='' placeholder='Enter name'></input>
            Email
            <input type='email' name='' placeholder='Enter email'></input>
           Address
            <input type='text' name='' placeholder='Enter address'></input>
            city
            <input type='text' name='' placeholder='Enter city'></input>
            <div className='zip'>
              <label htmlFor="">
                State 
                <select style={{width:"291px"}}>
                  choice
                  {stateName.map((state,index)=>(
                    <option  key={index} value="">{state}</option>
                  ))}
                  
                </select>
              </label>
              <label>
                Zip code 
                <input type="number" placeholder='Zip code' />
              </label>
            </div>
          </form>
        </div>
        
        <div className='right'>
        <h3>PAYMENT <MdPayment /></h3>
        <div className='successfullshow'>{paymentStatus && (<p className="text-success"> Thanks ! Payment successful!<b>{countdown}</b></p>)}</div>
        <form>
            Accepted Payment <br/>
             
               <img src="https://www.businessleague.in/wp-content/uploads/2021/08/pnb-debit-card.jpg" width={90}/>
               <img src="https://t3.ftcdn.net/jpg/06/16/18/18/360_F_616181843_l404nbV07vMiXDZ1IhWiqZRDpetpuigu.jpg" width={115}/>
             
               <br /><br />
           Credit card number
            <input type='number' name='' placeholder='Enter card number'></input>
           Exp month
            <input type='month' name='' placeholder='Enter month'></input>
            <div className='zip'>
              <label htmlFor="">
              Exp year
                <select style={{width:"291px"}}>
                 <option value="">2023</option>
                 <option value="">2024</option>
                 <option value="">2025</option>
                 <option value="">2026</option>
                 <option value="">2027</option>
                  
                </select>
              </label>
              <label>
                CVV
                <input type="CVV" placeholder='CVV' maxLength={3} />
              </label>
            </div>
            <div className='paybtn'>
            <button type="button" className="btn btn-success" onClick={handlePayment}>PAYMENT</button>
            <Link to="/REJECT" type="button" className="btn btn-danger" >REJECT</Link>
            </div>
          </form>
</div>
        </div>
        
        
    </header>
    <Footer/>
    
    
    </>
  )
}
export default FinalPayment;