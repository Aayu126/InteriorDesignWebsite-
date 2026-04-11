import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ShowcaseGrid from './components/ShowcaseGrid'
import ServicesSection from './components/ServicesSection'
import BookingSection from './components/BookingSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="bg-black text-foreground min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ShowcaseGrid />
        <ServicesSection />
        <BookingSection />
      </main>

      <Footer />
      
      <ScrollToTop />
    </div>
  )
}

export default App
