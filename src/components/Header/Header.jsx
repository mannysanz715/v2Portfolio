import MacScreen from '../MacScreen/MacScreen'
import './Header.css'
function Header()  {
  return (
    <>
      <header>
        <div className="header-title">
          <h2 className="header-name">Manny Sanchez</h2>
          <h1 className="header-position">Software Developer</h1>
        </div>
        <MacScreen />
      </header>
    </>
)
}

export default Header