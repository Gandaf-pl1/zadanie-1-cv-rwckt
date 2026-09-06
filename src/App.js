import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page">
      <div className="cv">
        <div className="content">
          <h1>CV</h1>

          <h2>Jan Kowalski</h2>

          <div className="section">
            <h3>Wykształcenie</h3>
            <p>Ukończona szkoła podstawowa</p>
          </div>

          <div className="section">
            <h3>O mnie</h3>
            <p>
              Jestem osobą spokojną, dokładną i lubię logiczne myślenie.
              Interesuję się grami planszowymi, a szczególnie warcabami.
            </p>
          </div>

          <div className="section">
            <h3>Warcaby</h3>
            <p>
              Warcaby to gra planszowa dla dwóch osób. Polega na przesuwaniu
              pionków po planszy i zbijaniu pionków przeciwnika. Gra rozwija
              logiczne myślenie, koncentrację oraz umiejętność planowania.
            </p>
          </div>
        </div>

        <div className="image-container">
          <img src="/warcaby.png" alt="Plansza do warcabów" />
        </div>
      </div>
    </div>
  );
}


export default App;
