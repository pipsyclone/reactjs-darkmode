import Script from './script';
import './style.css';

const App = () => {

  const { theme, toggleTheme } = Script()

  return (
    <>
      <div className={`card-custom border-custom middle text-center ${theme}`}>
        <h1>{theme == 'light' ? 'Light' : 'Dark'} Mode</h1>
        <hr />
        <span>Press button to see the changes : </span>
        <br />
        <button className={theme == 'light' ? 'btn-darkmode mt-3 mb-3' : 'btn btn-primary mt-3 mb-3'} onClick={toggleTheme}>
          { 
            theme == 'light' ? 
              <>
                <i className='fa-solid fa-moon me-3'></i>
                <span>Dark Mode</span>
              </>
            : 
              <>
                <i className='fa-solid fa-sun me-3'></i>
                <span>Light Mode</span>
              </> 
          }
        </button>
      </div>
    </>
  )
}

export default App;