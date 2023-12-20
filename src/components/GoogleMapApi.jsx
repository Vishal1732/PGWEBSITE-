import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

 const GoogleMapApi = () => {

  return (<>
    <address>
      Noida Sec-92 Uttar Pradesh India Near by sec-83 Metro Station
    </address>
    <div className='responsive-map'>
    <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7011.4029252396695!2d77.38911153846205!3d28.518628379964866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce89144700ac9%3A0xc2ae0475c7b43398!2sSector%2092%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1702993356089!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <Footer/>
    </>
  )
}

export default GoogleMapApi;
