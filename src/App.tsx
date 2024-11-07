import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import EmergencyBanner from './components/EmergencyBanner';
import SafetyButton from './components/SafetyButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-orange-50 to-white">
      <EmergencyBanner />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>

      <SafetyButton />
    </div>
  );
}

export default App;