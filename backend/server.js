import express from "express";

const app = express();
app.use(express.static('dist'));


app.get('/Booking/indianStateNames', (req, res) => {
  const indianStateNames = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
    'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi',
    'Puducherry'
  ];

 

  res.send(indianStateNames);
});

app.get('/lists/foodlist', (req, res) => {
  const foodlist = [
    { day: "Monday", breakfast: "Allu Paratha", dinner: "Roti Sabji Rice Fry Dal" },
    { day: "Tuesday", breakfast: "Puri Chola", dinner: "Roti Sabji Rice Fry Dal" },
    { day: "Wednesday", breakfast: "Sukha Paratha", dinner: "Roti Panner Rice Fry" },
    { day: "Thursday", breakfast: "Pohaa", dinner: "Roti Sabji Rice Chola" },
    { day: "Friday", breakfast: "Allu Paratha", dinner: "Roti Sabji Rice MungDal" },
    { day: "Saturday", breakfast: "Allu Pakoda", dinner: "Roti Sabji Green Salad FRY RICE" },
    { day: "Sunday", breakfast: "Choumin & Pasta", dinner: "Roti Sabji Rice Dal 2 Sweet" },
  ];

  res.send(foodlist);
});

app.get('/price/boysPriceData', (req, res) => {
  const  boysPriceData = [
    {
      id: 1,
      roomsize: 'Single Bed Sharing',
      price: 10000,
      month: '/Per Month',
      room: '1 Room Personal',
      food: ' Breakfast & Dinner',
      internet: 'FREE WIFI',
      fresh: 'Separate Washroom',
      helpus: 'Help center access',
    },
    {
      id: 2,
      roomsize: 'Twice Bed Sharing',
      price: 7500,
      month: '/Per Month',
      room: '2 Boys in room',
      food: ' Breakfast & Dinner',
      internet: 'FREE WIFI',
      fresh: 'Sharing Washroom',
      helpus: 'Help center access',
    },
    {
      id: 3,
      roomsize: 'Triple Bed Sharing',
      price: 7000,
      month: '/Per Month',
      room: '3 Boys in Room',
      food: ' Breakfast & Dinner',
      internet: 'FREE WIFI',
      fresh: 'Sharing Washroom',
      helpus: 'Help center access',
    },
   { id: 4,
    roomsize: 'Besment',
    price: 5500,
    month: '/Per Month',
    room: 'One bed & one personal godrej ',
    food: ' Breakfast & Dinner',
    internet: 'FREE WIFI',
    fresh: 'Sharing Washroom',
    helpus: 'Help center access',
  },
  ];

  res.send(boysPriceData);
});

app.get('/price/girlsPriceData', (req, res) => {
  const girlsPriceData = [
    {
      id: 1,
      roomsize: 'Single Bed Sharing',
      price: 9500, 
      month: '/Per Month',
      room: '1 Room Personal',
      food: ' Breakfast & Lunch', 
      internet: 'FREE WIFI',
      fresh: 'Separate Washroom',
      helpus: 'Help center access',
    },
    {
      id: 2,
      roomsize: 'Twice Bed Sharing',
      price: 7200, 
      month: '/Per Month',
      room: '2 Girls in Room', 
      food: ' Breakfast & Dinner',
      internet: 'FREE WIFI',
      fresh: 'Sharing Washroom',
      helpus: 'Help center access',
    },
    {
      id: 3,
      roomsize: 'Triple Bed Sharing',
      price: 6800, 
      month: '/Per Month',
      room: '3 Girls in Room', 
      food: ' Breakfast & Dinner',
      internet: 'FREE WIFI',
      fresh: 'Sharing Washroom',
      helpus: 'Help center access',
    },
    {
      id: 4,
      roomsize: 'Besment',
      price: 5200, 
      month: '/Per Month',
      room: 'One bed & one personal godrej',
      food: ' Breakfast & Dinner',
      internet: 'FREE WIFI',
      fresh: 'Sharing Washroom',
      helpus: 'Help center access',
    },
  ];
  

  res.send(girlsPriceData);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
