import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar";
import { Shop } from './pages/shop/Shop'
import { cart } from './pages/cart/cart'
// import { shopcontextprovider } from './context/shop-context.jsx'


function App() {
  return <div className="App">
    {/* <shopcontextprovider> */}
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<cart />} />

      </Routes>
    </Router>
    {/* </shopcontextprovider> */}

  </div>
}

export default App;
