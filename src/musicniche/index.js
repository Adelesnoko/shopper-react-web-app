import React from "react";
import Nav from "../nav";
import { Link, Route, Routes } from "react-router-dom";
import Navigation from "./navigation";
import { KEY } from "./services/spotify-service";
import HomeScreen from "./home-screen";
// import SearchScreen from "./search-screen";
import DetailScreen from "./detail-screen";
import LoginScreen from "./users/login-screen";
import RegisterScreen from "./users/register-screen";
import ProfileScreen from "./users/profile-screen";
import Search from "./search-screen/search";
// import WhoToFollowList from "./who-to-follow-list";

function MusicNiche() {
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
            {/* <Route path="/search" element={<SearchScreen />} /> */}
            <Route path="/search" element={<Search />} />
            <Route path="/detail-screen/:id" element={<DetailScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Routes>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 d-none d-md-none d-lg-block order-md-last">
          <h2>Who to Follow</h2>
          {/* <WhoToFollowList /> */}
        </div>
      </div>
    </div>
    // </Provider>
  );
}

export default MusicNiche;
