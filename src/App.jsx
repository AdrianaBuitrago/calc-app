/* eslint no-eval:0*/
//importación
import React, {useState} from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

//Arrow Function
const App = () => {
    // Array Destructuring
    // 1er posición: valor (que inicialmente es el valor por defecto
    // cambiamos la propiedad "texto" por "stack"
    // 2da posiicón: función que me va a permitir modificar el valor por defecto
    // Naming= valor:[nombre-valor] función: set[nombre_valor] ejem: [xx], [setxx]
    const [stack, setStack] = useState('')


    const items = words(stack, /[^-^+^*^/]+/g)

    // es similar a un if el ?
    // (esTrue) ? (resultadosiesTrue) : (sino,resultadoporFalse)
    const value = items.length > 0 ? items[items.length-1] : '0'
    console.log('Renderización de App', value)

    return (
        <main className="react-calculator">
            <Result value={value} />
            <Numbers onClickNumber={number => {
                console.log('number:', number)
                setStack(`${stack}${number}`) //con stack se almacena el numero seleccionado 9 luego 9+1 etc
            }}/>
            <Functions
                onContentClear={() => {
                    console.log('content clear')
                    setStack('')
                }}
                onDelete={() => {
                    if (stack.length > 0) {
                        const newStack = stack.substring(0, stack.length -1)
                        console.log('onDelete', newStack)
                        setStack(newStack)}
                }}
            />
            <MathOperations
                onClickOperation={(operation) => {
                    console.log('operation:', operation)
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={(equal) => {
                    console.log('Equal:', equal)
                    setStack(eval(stack).toString())
                }}
            />
        </main>
    )
}

export default App
//exportación
