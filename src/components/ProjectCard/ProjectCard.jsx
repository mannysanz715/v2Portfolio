import './ProjectCard.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
/* eslint-disable react/prop-types */

function ProjectCardLight({description, image, title, codeLink, liveLink, idx}){
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
            <p>{description}</p>
          </div>
        </section>
      </>
)
}

export default ProjectCardLight