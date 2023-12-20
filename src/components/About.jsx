import { useState } from "react";

const About=()=>{
   
  const [active,setActive]=useState(false);

  const handleRead=()=>{
    setActive(true);
  }
  const handleHide=()=>{
    setActive(false);
  }

  return(<>
    <div className="about-section">
      <h2>About Description</h2>
      <button className="about-button" onClick={handleRead} onDoubleClick={handleHide}>Read</button>
  { active &&
    (  <p>A hostel is a budget-oriented, shared-living accommodation that offers a temporary place of stay for travelers, students, or individuals seeking affordable lodging. Hostels are known for providing dormitory-style rooms with bunk beds, where guests share the same space. Additionally, some hostels offer private rooms.

Hostels are popular among budget-conscious travelers as they provide a cost-effective alternative to hotels. Facilities in hostels typically include shared bathrooms, communal kitchens, and common areas where guests can interact and socialize. Many hostels also organize group activities, tours, or events to foster a sense of community among guests.

Unlike hotels, hostels prioritize communal living and a casual atmosphere, encouraging guests to meet fellow travelers and exchange experiences. They are commonly found in popular tourist destinations, cities, and near educational institutions, catering to a diverse group of people from various backgrounds and cultures. Hostels play a crucial role in promoting budget-friendly and sociable accommodation options for those who prioritize affordability and a communal travel experience.</p>)}
    </div>

    <hr/>
  
  
  
  </>)
}
export default About;