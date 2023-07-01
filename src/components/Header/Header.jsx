import MacScreen from '../MacScreen/MacScreen'
import './Header.css'
import 'animate.css';

function Header()  {
  return (
    <>
      <header >
        <div className="header-title">
          <h2 className="header-name animate__animated animate__fadeIn">Manny Sanchez</h2>
          <h1 className="header-position animate__animated animate__fadeIn">Software Developer</h1>
        </div>
        <MacScreen />
      </header>
    </>
)
}

export default Header