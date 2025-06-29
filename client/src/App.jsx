import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, } from 'react-router-dom'
import BikeDetails from './pages/BikeDetails'
import Home from './pages/Home'
import Bikes from './pages/Bikes'
import MyBookings from './pages/MyBookings'
import { useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddBike from './pages/owner/AddBike'
import ManageBikes from './pages/owner/ManageBikes'
const App = () => {

  const [showLogin, setShowLogin] = React.useState(false)
  const isOwnerPath = useLocation().pathname.startsWith("/owner")
  return (
    <>
     {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/bike-details/:id' element={<BikeDetails/>}/>
       <Route path='/bikes' element={<Bikes/>}/>
       <Route path='/my-bookings' element={<MyBookings/>}/>
         <Route path='/owner' element={<Layout/>}>
         <Route index element={<Dashboard/>}/>
         <Route path='add-bike' element={<AddBike/>}/>
         <Route path='manage-bikes' element={<ManageBikes/>}/>
         <Route path='manage-bookings' element={<ManageBookings/>}/>

         </Route>
     </Routes>

     {!isOwnerPath && <Footer/>}
     



  


  
    </>
  )
}

export default App
