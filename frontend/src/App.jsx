// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Home from "./pages/Home";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import About from "./pages/About";

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //        <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/about" element={<About />} />
// //       </Routes>
// //     </Router>
// //     </>
// //   )
// // }

// // export default App

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import About from "./pages/About";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div className="content">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//       </div>
//       <Footer/>
//     </Router>
    
//   );
// };

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyerNavbar from "./components/BuyerNavbar";
import BuyerHome from "./pages/BuyerHome";
import BuyerMyBids from "./pages/BuyerMyBids";
import BuyerMyWins from "./pages/BuyerMyWins";
import BuyerProfile from "./pages/BuyerProfile";
import Logout from "./pages/Logout";

function App() {
  return (
    <Router>
      <BuyerNavbar />
      <Routes>
        <Route path="/buyer/home" element={<BuyerHome />} />
        <Route path="/buyer/my-bids" element={<BuyerMyBids />} />
        <Route path="/buyer/my-wins" element={<BuyerMyWins />} />
        <Route path="/buyer/profile" element={<BuyerProfile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
