import './ProjectCard.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
/* eslint-disable react/prop-types */

function ProjectCardLight({description, title, idx}){
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
            <img loading='lazy' className='project-image' src='https://lh3.googleusercontent.com/pw/AJFCJaX7yz5aHXO2csO0u8wlkfGX8Y1dOhxOqgzJ70yZWcRivtCIwl1tQ3pfp-e6EGzT761iThesYsAbULE1rv6YOTxa4lFGFN5xgM4-rqsHsZZc2P3exDpZiYK8TUhY5XDhSrfycHJPRB5mQ0_KDRj4NXB6oX6LnF-MgxdbbANVuTxYi0VC_NfLCOv9TMb1vlF2XawL9f9yjQF81aK0pbMS8fM3KKCzQZmQUYcoNML6w1bur8J6QCbpRwu0lxSgQ4Px_nVd09PBFRS-gNGBhU5ktMmF_jatBcmLIIJHlKOJJ-QdUMFPPbZ5srr7ckv_FMp6w3ImuOe_AFJIsL6vhDBWjf0UzThyb60l6cG4ZA9KY_pKyJXbD8T5hCHRYRElXIW7KGPDR7PwFz2KTI6-Xd7666xvwpucFRp4wU7vY0SrKDAjQHBpS8gYytGI-yrxBPmbOMSkI4FpkTtgDumot30M1XOv8L3NtLS6_Sd0UDSACXvLasRuRzV5mupksbmoCZvYMCHkNSoJSDDH_icIHPHOSNt4tVdOgxJR5znVziQQVv3ibDU-Zdjuf3w1GEcamsX5FAmpCWHnpxvgIGMj_3IACr-9j62z0S725qjhh5D7deI5BXMiM5LjEtmP_SDNkNXbQpcmPJJXv5JaFgpeJBmnIKatAir6T9G8eKhxz3sMSAQ7XbZGjtO_wgM-qYLcYdlqydCexGKWH0Ip5M1sbuUkSIhnMj0X0ve6j2tPLcR6-vDDiQgNzmcwIpctGQrX0sbV4StuvomkV889GpcpNIYhhtNwud6noZMPWBsTji_x3S1oBrI_dkhJNpXZcXqCLiM6Y9C47rQ2LthiODIJzmVzMAh5KUnIGsbYm7gE3ZxEiBXtCZ8jTxETKwvTKqm9qQK7k1-94wbJP5uYez8Pohc_QJNVjAMzafZqet4XODGeJtvSN7cz-fTil0QoE7ql=w2160-h1232-s-no?authuser=0' alt='projectImage'/>
            <div className='buttons-container'>
              <button className='code-button button white'>Code</button>
              <button className={ `${even ? 'live-page-button-dark' : 'live-page-button-light' }  button`}>Live Page</button>
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