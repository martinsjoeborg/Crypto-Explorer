import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from "./components/pages/home/Home.jsx";
import About from "./components/pages/about/About.jsx";
import ConnectWallet from "./components/navbar/connectbtn/ConnectWallet.jsx";
import DefiMain from "./components/pages/defi/DefiMain.jsx";
import SwapMain from "./components/pages/defi/swap/SwapMain.jsx";
import StakeMain from "./components/pages/defi/stake/StakeMain.jsx";
import BorrowLendMain from "./components/pages/defi/borrow-lend/BorrowLendMain.jsx";


function App() {

  return (
      <BrowserRouter>
      <div className="navbar">
      <Link to="/" className="header-logo">Crypto Explorer</Link>
        <nav className="menuBtns">
          <Link to="/defi">DeFi</Link>
          <Link to="/about">ABOUT</Link>
        </nav>
        <ConnectWallet />
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/defi" element={<DefiMain />} />
        <Route path="/defi/swap" element={<SwapMain />} />
        <Route path="/defi/stake" element={<StakeMain />} />
        <Route path="/defi/borrow-lend" element={<BorrowLendMain />} />
        
        {/* ... other routes */}
      </Routes>
      </BrowserRouter>
  )
}

export default App
