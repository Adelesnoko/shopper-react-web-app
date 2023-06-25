import { Routes, Route } from "react-router";
import Nav from "../nav";
import Navigation from "./navigation";
import HomeScreen from "./home-screen";
import SearchScreen from "./search-screen";
import DetailScreen from "./detail-screen";
import ProfileScreen from "./users/profile-screen";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
import LoginScreen from "./users/login-screen";
import RegisterScreen from "./users/register-screen";

function Shopper() {
  return (
    // <Provider store={store}>
    <div>
      <Nav />
      <div className="row">
        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <div className="d-flex flex-column">
            <div className="mb-3">
              <Navigation />
            </div>
          </div>
        </div>
        <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-10 col-sm-10 order-md-2 order-1">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/details" element={<DetailScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Routes>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 d-none d-md-none d-lg-block order-md-last">
          <h3>Who to Follow</h3>
          <ul>
            <li>Suggestion 1</li>
            <li>Suggestion 2</li>
            <li>Suggestion 3</li>
          </ul>
        </div>
      </div>
    </div>
    // </Provider>
  );
}

export default Shopper;
