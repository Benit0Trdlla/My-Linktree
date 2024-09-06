import './App.css'
import Cards from './components/cards'
import Notification from './components/notification'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ borderColor: 'red', borderStyle: 'solid', borderWidth: 1 }}>
        <h1 style={{ marginBottom: '0px' }}>Benito Tridella</h1>
        <p style={{ marginTop: '0px' }}>Desarrollador Frontend</p>
        <div style={{ padding: '10px', marginBottom: '10px', borderColor: 'blue', borderStyle: 'solid', borderWidth: 1 }}>
          <p style={{ color: 'green', maxWidth: '500px', margin: '0 auto' }}>
            Desarrollador Frontend enfocado en crear interfaces modernas y eficientes,
            aprovechando mis conocimientos y mejores prácticas.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15px' }}>
            <div className="radio-inputs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">HTML</span>
              </label>
              <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">CSS</span>
              </label>
              <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">Javascipt</span>
              </label>
              <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">React</span>
              </label>
              <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">Next.js</span>
              </label>
              <label className="radio">
                <input type="radio" name="radio" />
                <span className="name">Bootstrap</span>
              </label>
              <style>
                {`
                  .radio-inputs {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 0.5rem;
                    background-color: #EEE;
                    box-sizing: border-box;
                    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
                    padding: 0.25rem;
                    width: 300px;
                    font-size: 14px;
                  }

                  .radio-inputs .radio {
                    flex: 1 1 auto;
                    text-align: center;
                  }

                  .radio-inputs .radio input {
                    display: none;
                  }

                  .radio-inputs .radio .name {
                    display: flex;
                    cursor: pointer;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.5rem;
                    border: none;
                    padding: .5rem 0;
                    color: rgba(51, 65, 85, 1);
                    transition: all .15s ease-in-out;
                  }

                  .radio-inputs .radio input:checked + .name {
                    background-color: #fff;
                    font-weight: 600;
                  }
                `}
              </style>
            </div>
          </div>
          <div style={{ padding: '10px', marginTop: '16px', marginBottom: '16px', borderColor: 'yellow', borderStyle: 'solid', borderWidth: 1, gap: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cards href="https://github.com/Benit0Trdlla" name="GitHub" svg={<svg role="img" width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>}/>
            <Cards href="https://www.linkedin.com/in/benito-tridella-dolce/" name="LinkedIn" svg={<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2" /></svg>} />
            <Cards href="benitotridelladolce@gmail.com" name="Email" svg={<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42"><g fill="none" fillRule="evenodd"><g fillRule="nonzero"><path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z" /><path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z" /><path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z" /></g><path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z" /><path fill="#c5221f" fillRule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z" /></g></svg>}/>
          </div>
          <div style={{ padding: '10px', marginTop: '16px', marginBottom: '16px', borderColor: 'yellow', borderStyle: 'solid', borderWidth: 1, gap: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Notification title="Descargar CV" description="Descarga mi Curriculum Vitae" />
            <Notification title="Visita mi Portfolio" description="Un reflejo de mi compromiso con la creación de interfaces de usuario atractivas." />
            {/* <a style={{ textDecoration: 'none', borderRadius: '55px', border: '1px solid white', padding: '10px' }} href="CV/Frontend - Benito Tridella Dolce.docx.pdf" download="Frontend - Benito Tridella Dolce.pdf" target="_blank" rel="noreferrer"><span>💼</span> Descargar CV</a> */}
            {/* <a style={{ textDecoration: 'none', borderRadius: '55px', border: '1px solid white', padding: '10px' }} href="https://portfolio-pi-six-69.vercel.app/" target="_blank" rel="noreferrer"><span>💼</span>Portfolio</a> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
