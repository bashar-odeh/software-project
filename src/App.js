import React, { useState, useEffect } from "react";
// pages
import HomePage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import CarDetails from "./pages/CarDetails";
import Account from "./pages/Account";
import Login from "./components/Login";
import Signup from "./components/Signup";

//COMPONENTS
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
// ROUTING
import { Route, Switch, Redirect } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
// action
import isUserLoggedInAction from "./actions/isUserLoggedInAction";
import isAdminLoggedInAction from "./actions/isAdminLoggedInAction";
import Footer from "./components/Footer";

function App() {
  const { userStatus } = useSelector((state) => state.userStatus);
  const [myname, setMyName] = useState("x");
  const { adminStatus } = useSelector((state) => state.isAdminLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    //whenever a re-redner happens this check for user login status
    dispatch(isUserLoggedInAction());
    dispatch(isAdminLoggedInAction());
  }, [adminStatus, userStatus]);

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Login />
      <Signup />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/account">
          // add a function to render
          <Account />
        </Route>
        <Route path={["/cardetails/:id"]}>
          <CarDetails />
        </Route>

        <Route>
          <span>405</span>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
