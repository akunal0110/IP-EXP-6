import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import CollegeInfo from './components/CollegeInfo';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactForm from './components/ContactForm';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/college-info" element={<CollegeInfo />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
