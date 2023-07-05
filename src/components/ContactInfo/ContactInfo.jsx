import './ContactInfo.css'
import Aos from 'aos'
import { useEffect } from 'react'
const ContactInfo = () => {
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])
  return (
    <div id='contact-me' className='contact-container'>
      <h1 className='contact-title'>
        Lets Connect!
      </h1>
      <ul className='contact-list'>
      <a data-aos='zoom-in' target="_blank" href='https://www.linkedin.com/in/manuel-sanchez-leandro/' rel="noreferrer"><li className="linkedIn list-item">
          LinkedIn <img src='/assets/linkedin.png' alt='linkedIn-img'/>
        </li></a>
        <a href='https://github.com/mannysanz715' data-aos='zoom-in' target='_blank' rel="noreferrer"><li className="github list-item">
          GitHub <img src='/assets/github.png' alt='github-img'/>
        </li></a>
        <a href="https://drive.google.com/file/d/1AMKMILOEmWyopWbh-0aeYdZEJS4JyOmh/view?usp=share_link" data-aos='zoom-in' target='_blank' rel="noreferrer"><li className="resume list-item">Resume <img src='/assets/resume.png' alt='email-img'/></li></a>
        <a data-aos='zoom-in' href="mailto:mannysleandro@gmail.com"><li className="email list-item">Email Me <img src='/assets/gmail.png' alt='email-img'/></li></a>
      </ul>
    </div>
)
}

export default ContactInfo