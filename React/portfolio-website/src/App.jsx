import style from './App.module.css'
import About from './components/About/About'
import Contacts from './components/Contact/Contacts'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <div className={style.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contacts/>
      </div>
    </>
  )
}

export default App
