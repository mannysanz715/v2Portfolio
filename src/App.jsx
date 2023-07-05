import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import ContactInfo from './components/ContactInfo/ContactInfo'
import Header from './components/Header/Header'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import Technologies from './components/Technologies/Technologies'
function App() {
  return (
    <>
      <Header />
      <ProjectsSection />
      <AboutMe />
      <Technologies />
      <ContactInfo />
    </>
  )
}

export default App
