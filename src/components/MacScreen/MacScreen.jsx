
import './MacScreen.css'
function MacScreen () {
  const text = [['//Click-Able Components', '#'],['<Header />', '#'], ['<Projects />', '#projects'], ['<About Me />', '#about-me'], ['<Technologies />', '#technologies'], ['<Contact Me/>', '#contact-me']]
  const text1 = '<>'
  const text3 = '</>'
  return (
    <>
      <div className='whole-window'>
        <div className='top-bar'>
          <div className='round red'></div>
          <div className='round yellow'></div>
          <div className='round green'></div>
        </div>
        <div className='text-container'>
          <p className='open-rf'>{text1}</p>
          <div className='text-content'>
            {
              text.map((line, idx)=>
              <a key={idx} href={line[1]} className='header-link'id={`line-${idx}`}>{line[0]}</a>
              )
            } 
          </div>
            <p className='close-rf'>{text3}</p>
        </div>
      </div>
    </>
)
}

export default MacScreen