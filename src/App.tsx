import { ContadorRed } from './components/useReducer/ContadorRed';
import { Counter } from './components/useState/Counter';
import { TimerPadre } from './components/useEffect - useRef/TimerPadre';
import { Usuario } from './components/useState/Usuario';



function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr/>

      <h2>useState</h2>
      <hr/>
      <Counter />

      <Usuario />

      <br/>
      <h2>useEffect - useRef</h2>
      <hr/>

      <TimerPadre />

      <br/>
      <h2>UseReducer</h2>
      <hr/>

      <ContadorRed />

    </>
  );
}

export default App;