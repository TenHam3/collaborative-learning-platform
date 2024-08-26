import './App.module.css';
import './globals.css';
import Sidebar from './components/sidebar';
import Card from './components/card';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';

function App() {
  // Get user's username from backend and pass it into greeting in header

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;