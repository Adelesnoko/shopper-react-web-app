// import Tuiter from "./tuiter";
// import Shopper from "./shopper";
import MusicNiche from "./musicniche";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index element={<MusicNiche />} />
          {/* <Route path="/tuiter/*" element={<Tuiter />} />
          <Route path="/shopper/*" element={<Shopper />} /> */}
          <Route path="/musicniche/*" element={<MusicNiche />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

// import React, { useEffect, useState } from "react";
// import Labs from "./labs"
// import HelloWorld from "./labs/a3/hello-world";
// import Tuiter from "./tuiter";
// import Navigation from "./nav";
// import LoginScreen, {user001} from "./tuiter/user/login-screen";
// import RegisterScreen from "./tuiter/user/register-screen";
// import ProfileScreen from "./tuiter/user/profile-screen";
// import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./tuiter/store";
// import AuthContext from "./tuiter/user/auth-context";
// import ProtectedRoute from "./tuiter/user/protected-route";

// function App() {
//   return (
//     <Provider store={store}>
//       <AuthContext>
//         <BrowserRouter>
//             <div className="container">

//               <Routes>
//                 <Route path="/login" element={<LoginScreen />} />
//                 <Route path="/register" element={<RegisterScreen />} />
//                 <Route
//                   path="/profile"
//                   element={
//                     <ProtectedRoute>
//                       <ProfileScreen />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route
//                   path="/tuiter/*"
//                   element={
//                     <ProtectedRoute>
//                       <Tuiter />
//                     </ProtectedRoute>
//                   }
//                 />
//                 <Route index        element={<Labs/>}/>
//                 <Route path="/labs/*"   element={<Labs/>}/>
//                 <Route path="/hello"    element={<HelloWorld/>}/>
//                 <Route path="/tuiter/*" element={<Tuiter/>}/>
//               </Routes>
//               </div>
//         </BrowserRouter>
//       </AuthContext>

//     </Provider>
//   );
// }
// export default App;
