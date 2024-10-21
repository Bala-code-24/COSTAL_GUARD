
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Beaches from './components/Beaches';
import About from './components/About';
import RegistrationForm from './components/Registeration';
import Profile from './components/Profile';
import Help from './components/Help';

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleRegister = (formData) => {
    setUserData(formData);
    setIsRegistered(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
        {!isRegistered ? (
          <RegistrationForm onRegister={handleRegister} />
        ) : (
          <>
            <nav className="bg-blue-900 text-white p-4">
              <ul className="flex justify-center space-x-6">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/beaches" className="hover:underline">Beaches</Link></li>
                <li><Link to="/about" className="hover:underline">About</Link></li>
                
                <li><Link to="/profile" className="hover:underline">Profile</Link></li>
                <li><Link to="/help" className="hover:underline">Help</Link></li>
              </ul>
            </nav>

            <div className="p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/beaches" element={<Beaches />} />
                <Route path="/about" element={<About />} />
                
                <Route path="/profile" element={<Profile userData={userData} />} />
                <Route path="/help" element={<Help />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
