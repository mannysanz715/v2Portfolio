import './AboutMe.css'
function AboutMe(){
  return (
    <>
      <h1 className='about-me-title' id='about-me'>About Me</h1>
      <div className="section-about-me">
        <div className="section-image">
          <img className='manny-image' alt='Manny Image' src='/assets/mannyImage.jpg'/>
        </div>
        <div className="section-paragraphs">
          
          <p className="about-me-paragraph p1">Good day! I am Manny, a Software Developer with a passion for coding. I discovered my interest in programming during my high school years and have continued to cultivate my skills since then. I find great satisfaction in working on projects and collaborating with others in the field.</p>

          <p className="about-me-paragraph p2">Aside from my profession, I also have a love for music and have honed several musical talents over the years. I taught myself the guitar at the age of six, played the violin in middle school, and recently added piano and saxophone to my repertoire. I am constantly seeking new challenges and look forward to what new skill I will acquire next.</p>
        </div>
      </div>
    </>
  )
}

export default AboutMe