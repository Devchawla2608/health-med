import React, { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './layout/Home/Navbar';
import Footer from './layout/Footer';
import Home from './layout/Home';
import Patient from './patient/Patient';
import Therapist from './therapist/Therapist';
import Register from './layout/Register_Patient';
import Login from './layout/Login_Patient';
import MoodTracking from './patient/MoodTracking';
import TherapistDB from './patient/TherapistDB';
import Your_Patients from './therapist/Your_Patients';
import Chat from './layout/Chat';
import VideoChat from './layout/Video_Chat.jsx';
import { UserContext } from './userContext';

function App() {
  const data = localStorage.getItem('thera-med');
  const [user, setUser] = useState(data ? JSON.parse(data) : null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <UserContext.Provider value={value}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={!user ? <Home /> : (user.isPatient ? <Patient /> : <Therapist />)} />
          <Route exact path="/mood-tracking" element={!user ? <Login /> : <MoodTracking />} />
          <Route exact path="/therapistsdb" element={!user ? <Login /> : <TherapistDB />} />
          <Route exact path="/patientinfo" element={!user ? <Login /> : (user.isPatient ? <Patient /> : <Your_Patients />)} />
          <Route exact path="/video-chat" element={!user ? <Login /> : <VideoChat />} />
          <Route exact path="/chat" element={!user ? <Login /> : <Chat />} />
          <Route exact path="/register" element={!user ? <Register /> : (user.isPatient ? <Patient /> : <Therapist />)} />
          <Route exact path="/login" element={!user ? <Login /> : (user.isPatient ? <Patient /> : <Therapist />)} />
        </Routes>
        <Footer />
      </UserContext.Provider> 
    </>
  );
}

export default App;
