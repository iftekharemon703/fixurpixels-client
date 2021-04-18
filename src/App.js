import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Book from './components/Dashboard/Book/Book';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import BookingList from './components/Dashboard/BookingList/BookingList';
import Review from './components/Dashboard/Review/Review';
import Admin from './components/Admin/Admin/Admin';
import OrderList from './components/Admin/OrderList/OrderList';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import AddServices from './components/Admin/AddServices/AddServices';
import ManageServices from './components/Admin/ManageServices/ManageServices';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/book">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/booking-list">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/order-list">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/add-service">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/make-admin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manage-services">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;