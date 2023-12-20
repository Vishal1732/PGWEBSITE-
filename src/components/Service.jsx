import React, { useState } from "react";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { FaHandHoldingWater } from "react-icons/fa";
import { IoMdWifi } from "react-icons/io";
import { TbWashDrycleanOff } from "react-icons/tb";
import BookingForm from "./BookingForm";
import { BsFillSignNoParkingFill } from "react-icons/bs";



const Service = () => {

const [showForm,setShowForm] = useState(false);
  const [active, setActive] = useState(false);


  const handleshowForm=()=>{
    setShowForm(true);
  }
  const handlehideForm=()=>{
    setShowForm(false);
  }

  const handleListShow = () => {
    setActive(true);
  };

  const handleListHide = () => {
    setActive(false);
  };

  return (
    <>
      <section className="service">
        <h1 className="service-h">service</h1>
        <button className="showservice" onClick={handleListShow} onDoubleClick={handleListHide}>
          Show Service
        </button>
        <button className="showBooking" onClick={handleshowForm} onDoubleClick={handlehideForm}>Inquiry form</button>
      </section>
      <hr />

     { showForm && ( <BookingForm />)}

      {active && (
        <div className="item-service">
          <ul className="list-group" style={{ backgroundColor: "red" }}>
            <li className="list-group-item">Clean & Fresh Room<TbWashDrycleanOff /></li>
            <li className="list-group-item">Healthy Food <PiBowlFoodDuotone /></li>
            <li className="list-group-item">24*7 Water Supply <FaHandHoldingWater /></li>
            <li className="list-group-item">WIFI <IoMdWifi /></li>
            <li className="list-group-item">Parking<BsFillSignNoParkingFill /></li>
          </ul>

        </div>
      )}
     
      <hr />
    </>
  );
};

export default Service;
