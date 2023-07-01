import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectsSection.css'
import projects from '../../data/projects.js'
function ProjectsSection(){
  return (
      <div className='projects-section' id='projects'>
        <h1 className='projects-section-title'>Projects</h1>
        {projects.map((project, idx)=>
          <ProjectCard key={idx} image={project.image} liveLink={project.liveLink} codeLink={project.codeLink} title={project.title} idx={idx} description={project.description}  />
        )}
      </div>
)
}

export default ProjectsSection