import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home'
import About from './pages/About';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
