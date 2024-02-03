import './App.scss'
import HorizontalScrollCarousel from './components/Animation/HorizontalScrollCarousel'
import { BackgroundTheme } from './components/Theme/BackgroundTheme'
import AboutUs from './layout/AboutUs'
import Hero from './layout/Hero'
import Navbar from './layout/Navbar'
import RegisterForm from './layout/RegisterForm'
import { useFormContext } from './services/RegisterForm/FormContext'

function App() {
  const {setFormValues} = useFormContext();

  return (
    <div className='font-default' >
      <BackgroundTheme />
      <main className='text-white'>
        <Navbar />
        <Hero />
        <HorizontalScrollCarousel />
        <AboutUs />
        <button onClick={() => {setFormValues('B','8') }}>click me for event='b' subevent='8'</button>
        <RegisterForm/>
      </main>
    </div>
  )
}

export default App
