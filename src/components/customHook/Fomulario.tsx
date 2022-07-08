import React, { ChangeEvent, useState } from 'react';



export const Fomulario = () => {

    const [ formulario, setFormulario ] = useState({
        email: '',
        nombre: ''
    });

    const handleInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        
        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [ name ]: value
        })

    }

    return (
        <form autoComplete='off'>

            <div className='mb-3'>
                <label className='form-label'>Email:</label>
                <input 
                    className='form-control'
                    name='email'
                    onChange={ handleInputChange }
                    // onChange={ (e) => handleInputChange(e) }
                    type='email'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Nombre:</label>
                <input 
                    className='form-control'
                    name='nombre'
                    onChange={ handleInputChange }
                    type='text'
                />
            </div>

            <pre>{ JSON.stringify( formulario ) }</pre>

        </form>
    )
}
