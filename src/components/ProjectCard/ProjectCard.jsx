/* eslint-disable react/prop-types */
import './ProjectCard.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function ProjectCardLight( { technologies, description, image, title, codeLink, liveLink, idx } ) {
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])
  
  let even = false

  if(idx % 2 == 0){
    even = true
  }
  return (
      <>
        <section data-aos='fade-up' className={'card-container ' + `${even ? 'background-light' : 'background-dark reverse'} `}>
          <div className='section-1'>
            <p className='project-title'>{title}</p>
            <img loading='lazy' className='project-image' src={image} alt='projectImage'/>
            <div className='buttons-container'>
              <a rel="noreferrer" target='_blank' href={codeLink}><button className='code-button button white'>Code</button></a>
              <a target='_blank' href={liveLink} rel="noreferrer"><button className={ `${even ? 'live-page-button-dark' : 'live-page-button-light' }  button`}>Live Page</button></a>
            </div>
          </div>
          <div className='section-2'>
            <div className='project-description'>
              <h3>Description:</h3>
              <p>{description}</p>
            </div>
            <div className='technologies-container'>
              <h3>Technologies:</h3>
              <ul className='technologies-list'>
                {technologies.map((tech, idx)=>
                  <li className='technology-item' key={idx}>{tech}</li>
                  )}
              </ul>
            </div>
          </div>
        </section>
      </>
)
}

export default ProjectCardLight