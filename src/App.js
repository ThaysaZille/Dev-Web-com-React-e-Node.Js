import logo from './logo.svg';
import './App.css';

function App() {
  function alertar(){
    alert("Voce clicou no titulo");
  }

  return (
    <div className="App">
      <h1 onClick={alertar}> Titulo </h1>
    </div>
  );
}

export default App;
