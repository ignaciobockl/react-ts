import { ContadorRed } from './components/ContadorRed';
import { Counter } from './components/Counter';
import { TimerPadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';



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