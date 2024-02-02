import './App.scss'
import { BackgroundTheme } from './components/Theme/BackgroundTheme'
import Hero from './layout/Hero'
import Navbar from './layout/Navbar'

function App() {

  return (
    <div className='font-default' >
      <BackgroundTheme />
      <main className='text-white'>
        <Navbar />
        <Hero />
      </main>
    </div>
  )
}

export default App
