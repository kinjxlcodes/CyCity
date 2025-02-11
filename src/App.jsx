import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Teams from './components/Teams'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Services } from './components/Services'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TollManagement from './pages/TollManagement'
import RoadInfrastructure from './pages/RoadInfrastructure'
import ParkingManagement from './pages/ParkingManagement'
import GsmMonitoring from './pages/GsmMonitoring'
import VoltageMonitor from './pages/VoltageMonitor'
import Erp from './pages/Erp'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'

const App = () => {
  return (
    <Router>
      {/* Ensure Navbar stays on top */}
      <div className="relative z-10">
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutUs id="about" />
              <Services id="services" />
              <Teams id="teams" />
              <Contact id="contact" />
            </>
          }
        />
        <Route path="/toll-management" element={<TollManagement />} />
        <Route path="/road-infrastructure" element={<RoadInfrastructure />} />
        <Route path="/parking-management" element={<ParkingManagement />} />
        <Route path="/voltage-monitor" element={<VoltageMonitor />} />
        <Route path="/gsm-monitoring" element={<GsmMonitoring />} />
        <Route path="/erp-system" element={<Erp />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
