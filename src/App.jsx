
import './App.css'
import Banner from './Components/Banner'
import Bookings from './Components/Bookings'
import Cards from './Components/Cards'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {


  return (
    <div style={{fontFamily:"sans-serif"}}>
      <Navbar></Navbar>
      <Banner></Banner>
      <Cards></Cards>
      <Bookings></Bookings>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  )
}

export default App
