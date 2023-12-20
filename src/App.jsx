import About from './components/About'
import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Service  from './components/Service'
import Footer  from './components/Footer'
import PriceRoom from './components/PriceRoom'
import FoodList  from './components/FoodList'


function App() {
 

  return (<>
      <div className='Appcontainer'>
   <Navbar></Navbar>
   <Background/>
     <About/>
    <Service></Service>
    <Footer/>
   </div>
    </>
  )
}

export default App
