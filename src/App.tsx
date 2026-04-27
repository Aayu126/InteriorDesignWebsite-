import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ShowcaseGrid from './components/ShowcaseGrid'
import ServicesSection from './components/ServicesSection'
import BookingSection from './components/BookingSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PortfolioPage from './pages/PortfolioPage'

function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ShowcaseGrid />
      <ServicesSection />
      <BookingSection />
    </main>
  )
}

function AppContent() {
  const location = useLocation();
  const isPortfolio = location.pathname === '/portfolio';

  return (
    <div className="bg-black text-foreground min-h-screen">
      {!isPortfolio && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
