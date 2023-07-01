import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectsSection.css'

function ProjectsSection(){
  const project = {
    image: 'img',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum vel inventore iusto in unde optio nemo. Iste maiores maxime harum, sapiente veniam tempora dignissimos illo, praesentium alias ut qui Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum vel inventore iusto in unde optio nemo. Iste maiores maxime harum, sapiente veniam tempora dignissimos illo, praesentium alias ut qui!',
    title: 'Project 1',
  }
  return (
      <div className='projects-section' id='projects'>
        <h1 className='projects-section-title'>Projects</h1>
        <ProjectCard title={project.title} idx={0} description={project.description}/>
        <ProjectCard title={project.title} idx={1} description={project.description}/>
      </div>
)
}

export default ProjectsSection