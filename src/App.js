import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Services from './Components/Services/Services';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Contact from './Components/Contact/Contact';
import Destination from './Components/Destinations/Destination';
import About from './Components/About/About';
import Booking from './Components/Booking/Booking';
import MyBooking from './Components/MyBooking/MyBooking';
import ManageBooking from './Components/ManageBooking/ManageBooking';
import AddPackage from './Components/AddPackage/AddPackage';

export const UserContext=createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState({});

  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser, cart, setCart}}>
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Header></Header>
       <Switch>
         <Route exact path="/">
            <Home></Home>
            <Footer/>
         </Route>
         <Route path="/home">
            <Home></Home>
            <Footer/>
         </Route>
         <Route path="/tours">
           <Services></Services>
           <Footer></Footer>
         </Route>
         <Route path="/destination">
           <Destination></Destination>
         </Route>
         <PrivateRoute path="/myBooking">
           <MyBooking></MyBooking>
         </PrivateRoute>
         <PrivateRoute path="/manageBooking">
           <ManageBooking></ManageBooking>
         </PrivateRoute>
         <Route path="/addPackage">
           <AddPackage></AddPackage>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <PrivateRoute path="/booking/:serviceId">
           <Booking></Booking>
         </PrivateRoute>
         <Route path="/contact">
           <Contact></Contact>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>

     </BrowserRouter>
     </AuthProvider>

    </div>
    </UserContext.Provider>
  );
}

export default App;
