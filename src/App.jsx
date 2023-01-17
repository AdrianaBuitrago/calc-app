//importación
import React from 'react'
import './App.css'

//Arrow Function
const App = () => {
    //Lo que ejecuta la función
    return (
        <main className="react-calculator">
            <div className="result"></div>
            <div className="numbers">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>6</button>
                <button>9</button>
                <button>0</button>
            </div>
            <div className="functions">
                <button>clear</button>
                <button>r</button>
            </div>
            <div className="math-operations">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <div className="numbers">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </main>
    )
}

export default App
//exportación
