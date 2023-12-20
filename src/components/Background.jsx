import { useEffect, useState } from "react";
import "./Slider.css"; 

const images = [
  "https://vistapointe.net/images/hostel-2.jpg",
  "https://images.pexels.com/photos/5137969/pexels-photo-5137969.jpeg?cs=srgb&dl=pexels-cottonbro-studio-5137969.jpg&fm=jpg",
  "https://images.trvl-media.com/lodging/2000000/1530000/1524400/1524322/c5cbad5e.jpg?impolicy=resizecrop&rw=500&ra=fit",
  "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20035077-f9e0dea499bda6cd645d064f6f59a44e.jpeg?_src=imagekit&tr=c-at_max,h-280,q-40,w-740",
  "https://static.india.com/wp-content/uploads/2023/08/Noida-1.png",
  "https://images.unsplash.com/photo-1604942030135-73e2f02503b3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5vaWRhfGVufDB8fDB8fHww"
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <img
          key={index}
          className={`slider-image ${index === currentImage ? "visible" : "hidden"}`}
          src={image}
          alt={`slide-${index}`}
        />
      ))}
      <hr/>
    </div>
  );
};

export default Slider;
