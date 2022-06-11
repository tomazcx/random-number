import './style.css'
import dice from '../dice.svg'
import { Calculate } from './Calculate'
import { Result } from './Result'
import { useState } from 'react'


export const App = () => {
    const [numbers, setNumbers] = useState([0, 0])
    const [componentActive, setActive] = useState(1)
    const [randomNumber, setRandomNumber] = useState(0)

    const generateNum = () => {
        const diff = Math.abs(numbers[0] - numbers[1])
        setRandomNumber(Math.round(Math.random() * diff))
        setActive(0)
    }

    const againFun = () =>{
        setActive(1)
    }

    return (
        <main>
            <img src={dice} alt="" width="65px" className='mb-4' />
            <h1 className='title'>Generate a random number</h1>
            {componentActive === 1 
            ? <Calculate calculateFun={generateNum} setNumbers={setNumbers} numbers={numbers} />
            : <Result againFun={againFun} numbers={numbers} result={randomNumber} />}
            
            <p className='mt-6 text-white'>Powered by <a href='https://github.com/tomazcx' target="_blank" className='hover:border-b border-solid'>tomazcx</a> </p>
        </main>
    )
}
