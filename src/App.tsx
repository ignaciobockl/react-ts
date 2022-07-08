import { ContadorRed } from './components/useReducer/ContadorRed';
import { Counter } from './components/useState/Counter';
import { TimerPadre } from './components/useEffect - useRef/TimerPadre';
import { Usuario } from './components/useState/Usuario';
import { Fomulario } from './components/customHook/Fomulario';



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
      <br/>
      <h2>useEffect - useRef</h2>
      <hr/>

      <TimerPadre />

      <br/>
      <br/>
      <h2>UseReducer</h2>
      <hr/>

      <ContadorRed />

      <br/>
      <br/>
      <br/>
      <h2>Custom Hooks</h2>
      <hr/>

      <Fomulario />

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default App;