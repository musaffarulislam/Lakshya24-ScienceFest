import './App.scss'
import HorizontalScrollCarousel from './components/Animation/HorizontalScrollCarousel'
import { BackgroundTheme } from './components/Theme/BackgroundTheme'
import AboutUs from './layout/AboutUs'
import Hero from './layout/Hero'
import Navbar from './layout/Navbar'

function App() {

  return (
    <div className='font-default' >
      <BackgroundTheme />
      <main className='text-white'>
        <Navbar />
        <Hero />
        <HorizontalScrollCarousel />
        <AboutUs />
      </main>
    </div>
  )
}

export default App
