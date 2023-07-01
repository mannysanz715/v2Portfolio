import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectsSection.css'
import { useState, useEffect } from 'react'
import projects from '../../data/projects.js'
import '../ProjectCard/ProjectCard.css'
import Aos from 'aos'

function ProjectsSection(){
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])
  const [showMore, setShowMore] = useState(false)
  function showMoreCards(){
    setShowMore(!showMore)
  }
  return (
      <div className='projects-section' id='projects'>
        <h1 className='projects-section-title'>Projects</h1>
        {showMore ? projects.map((project, idx)=>
          <ProjectCard key={idx} image={project.image} liveLink={project.liveLink} codeLink={project.codeLink} title={project.title} idx={idx} description={project.description} technologies={project.technologies} /> 
        ) : projects.map((project, idx)=>
          idx < 3 &&
            <ProjectCard key={idx} image={project.image} liveLink={project.liveLink} codeLink={project.codeLink} title={project.title} idx={idx} description={project.description}  technologies={project.technologies}/> 
        )}
        <button onClick={showMoreCards} className='show-more button live-page-button-light'>{showMore ? 'Show Less' : 'Show More'}</button>
      </div>
)
}

export default ProjectsSection