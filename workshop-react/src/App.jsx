import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import NavigationBar from './Components/NavigationBar.jsx';

// Lazy loading des composants
const Home = lazy(() => import('./Components/Home'));
const Events = lazy(() => import('./Components/Events'));
const EventDetails = lazy(() => import('./Components/EventDetails'));
const NotFound = lazy(() => import('./Components/NotFound'));


function App() {
  return (
    <div>
      <NavigationBar />
      <Suspense fallback={<div>chargement...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventName" element={<EventDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;