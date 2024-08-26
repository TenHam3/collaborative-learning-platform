import './App.module.css';
import Sidebar from './components/sidebar';
import Card from './components/card';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup';

function App() {
  // Get user's username from backend and pass it into greeting in header

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;