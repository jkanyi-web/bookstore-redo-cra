/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Categories from './pages/Categories';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
