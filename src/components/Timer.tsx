import React, { useEffect, useRef, useState } from 'react';


// se tiene que declarar de que tipo son lo argumentos que van a llegar del padre
type TimerArgs = {
    milisegundos: number,
    //segundos?: number, // ? significa que es opcional
}

// export const Timer = ( args: TimerArgs ) => {
export const Timer = ( { milisegundos }: TimerArgs ) => {

    const [ segundos, setSegundos ] = useState(0);

    const ref = useRef<NodeJS.Timer>();

    useEffect(() => {

        //limpiar el intervalo
        ref.current && clearInterval( ref.current );

        ref.current = setInterval(() => { setSegundos( s => s + 1 ) }, milisegundos);
    }, [ milisegundos ]);
    

    return (
      <>
          <h4>Timer: <small>{ segundos }</small></h4>
      </>
    )
}
