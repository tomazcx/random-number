import './style.css'
import dice from './dice.svg'
import { Calculate } from './components/Calculate'
import { Result } from './components/Result'
import { useState } from 'react'


export const App = () => {
    const [numbers, setNumbers] = useState([0, 0])
    const [componentActive, setActive] = useState(1)
    const [randomNumber, setRandomNumber] = useState(0)
    const [errorClass, setError] = useState("hideError")

    const generateNum = () => {
        try{
            const num1 = Number(numbers[0])
            const num2 = Number(numbers[1])
            const diff = Math.abs(num1 - num2)

            if(diff < 2){
                throw new Error()
            }

            const generatedNum = Math.round(Math.random() * diff)
            const randonNum = generatedNum + num1
            if(randonNum !== num1 && randonNum !== num2){
                setRandomNumber(randonNum)
                setError("hideError")
                return setActive(0)
                
            }else{
                return generateNum()
            }
        }catch(e){
            setError("showError")
        }
       
        
       
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
            
            <p className={errorClass}>Invalid numbers</p>
            <p className='mt-6 text-white {}'>Powered by <a href='https://github.com/tomazcx' target="_blank" className='hover:border-b border-solid'>tomazcx</a> </p>
        </main>
    )
}
