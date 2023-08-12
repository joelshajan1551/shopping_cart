import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar";
import { Shop } from './pages/shopping/Shop'
import { cart } from './pages/cart/cart'

function App() {
  return <div className="App">

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<cart />} />

      </Routes>
    </Router>


  </div>
}

export default App;
