import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderNew from './components/HeaderNew'
import Hero from './components/Hero'
import FeaturedJobs from './components/FeaturedJobs'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
import TendersNew from './components/TendersNew'
import TenderDetail from './components/TenderDetail'
import AdminDashboard from './components/AdminDashboard'
import Login from './components/Login'
import CompanyDashboard from './components/CompanyDashboard'
import WelcomeMessage from './components/WelcomeMessage'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <HeaderNew />
        <WelcomeMessage />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FeaturedJobs />
              <WhyChooseUs />
              <AboutUs />
            </>
          } />
          <Route path="/tenders" element={<TendersNew />} />
          <Route path="/tender/:id" element={<TenderDetail />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/company" element={<CompanyDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

