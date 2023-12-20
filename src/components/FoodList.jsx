import { useState,useEffect } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const FoodList = () => {
  const [col, setCol] = useState([]);

  
  useEffect(() => {
    axios
      .get('/lists/foodlist')
      .then((response) => {
        const states = Array.isArray(response.data) ? response.data : [];
        setCol(states);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <>
      <Navbar/>

      <div className="foodlistContainer">
        <div className="foodlist">
          <h1><b>Weekly Food List</b></h1>
          <img
            className="foodlistimg"
            src="https://eatapp.co/bahrain-restaurants/images/wu-asian-art-hotel-resort-amwaj-restaurant-1.jpg?height=500&width=850"
            alt=""
          />
        </div>

        <div className="row">
          {col.map((day, index) => (
            <div className="col-md-3" key={index}>
              <div className="card text-bg-light mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header"><h3>{day.day}</h3></div>
                <div className="card-body">
                  <h5 className="card-title" style={{color:"green"}}>Breakfast</h5>
                  <p className="card-text">
                    Good Morning! had Yummy Dish <b>{day.breakfast}</b> </p>
                    <h5 className="card-title" style={{color:"green"}}>Dinner</h5>
                  <p>  Yuhhh for dinner Yummy!! <b>{day.dinner}</b>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default FoodList;
