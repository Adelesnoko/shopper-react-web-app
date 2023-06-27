import MusicNiche from "./musicniche";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import { store } from "./musicniche/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
export default App;

// import React, { useEffect, useState } from "react";
// import Nav from "./nav";
// import LoginScreen, { user001 } from "./musicniche/users/login-screen";
// import RegisterScreen from "./musicniche/users/register-screen";
// import ProfileScreen from "./musicniche/users/profile-screen";
// import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./musicniche/store";
// // import AuthContext from "./musicniche/users/auth-context";
// import ProtectedRoute from "./musicniche/users/protected-route";

// function App() {
//   return (
//     <Provider store={store}>
//       {/* <AuthContext> */}
//       <BrowserRouter>
//         <div className="container">
//           <Routes>
//             <Route path="/login" element={<LoginScreen />} />
//             <Route path="/register" element={<RegisterScreen />} />
//             <Route
//               path="/profile"
//               element={
//                 <ProtectedRoute>
//                   <ProfileScreen />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/musicniche/*"
//               element={
//                 <ProtectedRoute>
//                   <MusicNiche />
//                 </ProtectedRoute>
//               }
//             />
//             <Route path="/musicniche/*" element={<MusicNiche />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//       {/* </AuthContext> */}
//     </Provider>
//   );
// }
// export default App;
