import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from '@auth0/auth0-react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import PriceRoom from './components/PriceRoom.jsx';
import FoodList from './components/FoodList.jsx';
import PaymentCard from './components/PaymentCard.jsx';
import FinalPayment from './components/FinalPayment.jsx';
import AboutNavbar from './components/AboutNavbar.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App />},
    { path: "Pricing", element: <PriceRoom/>},
    { path: "foodlist", element: <FoodList/>},
    { path: "Booking", element: <PaymentCard/>},
    { path: "Payment", element: <FinalPayment/>},
    { path: "REJECT", element:  <PaymentCard/> },
    { path: "About", element: <AboutNavbar/> },
  
  ],
  );
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-kejocjuhfxqkztqe.us.auth0.com"
    clientId="5KpeIUSK1fl9b09zibtIbi5Ow8TH5Crv"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>,
  </React.StrictMode>,
)
