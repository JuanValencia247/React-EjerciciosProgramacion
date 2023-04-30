import React from 'react'
import { useState } from 'react'
import Icon from '../../../public/img/icon.svg'
import { Ejercicio1, Ejercicio2 } from './exercises/Ejercicios'

export const Exercises = () => {

    const [resultado, setResultado] = useState(false)
    const solucion1 = () =>{
        setResultado(true)
    }
    const solucion2 = () =>{
        setResultado(true)
    }
    return (
        <section className='section-exercise'>

            <h2 className='section-exercise__title'>Ejercicios</h2>
            <details className="section-exercise__detalls">
                <summary className="section-exercise__detalls-summary">
                    Ejercicio 1
                    <img
                        className="section-exercise__detalls-summary-img"
                        src={Icon}
                        alt="arrow-down"
                    />
                </summary>
                <div className='section-exercise__detalls-content'>
                    <p className='section-exercise__detalls-content-paragraph'>Crear una variable con la sentencia var</p>
                    <button className='section-exercise__detalls-content-btn' onClick={solucion1} >Solucion</button>
                </div>
                <div className='section-exercise__detalls-resultado'>
                    {resultado && <Ejercicio1 />}
                </div>
            </details>

            <hr />

            <details className="section-exercise__detalls">
                <summary className="section-exercise__detalls-summary">
                    Ejercicio 2
                    <img
                        className="section-exercise__detalls-summary-img"
                        src={Icon}
                        alt="arrow-down"
                    />
                </summary>
                <div className='section-exercise__detalls-content'>
                    <p className='section-exercise__detalls-content-paragraph'>Declarar una funcion usando la instruccion function</p>
                    <button className='section-exercise__detalls-content-btn' onClick={solucion2}>Solucion</button>
                </div>
                <div className='section-exercise__detalls-resultado'>
                    {resultado && <Ejercicio2 />}
                </div>
            </details>

            <hr />

            <details className="section-exercise__detalls">
                <summary className="section-exercise__detalls-summary">
                    Ejercicio 3
                    <img
                        className="section-exercise__detalls-summary-img"
                        src={Icon}
                        alt="arrow-down"
                    />
                </summary>
                <div className='section-exercise__detalls-content'>
                    <p className='section-exercise__detalls-content-paragraph'>Realizar</p>
                    <button className='section-exercise__detalls-content-btn' onClick={solucion1}>Solucion</button>
                </div>
                <div className='section-exercise__detalls-resultado'>
                    {resultado && <Ejercicio2 />}
                </div>
            </details>

            <hr />



        </section>
    )
}
