import { useState } from 'react'



export const Calculate = (props) => {
    
    return (
        <div className="flex flex-col items-center justify-center">
           
            <p className='text-white mx-8 text-center'>Insert two numbers to generate a random one between then.</p>
            <div className='flex flex-col gap-4 mt-8 items-center sm:flex-row'>
                <input type="text" onChange={(input) => props.setNumbers([input.target.value, props.numbers[1]])}/>
                <p className='text-white'>between</p>
                <input type="text" onChange={(input) => {
                    props.setNumbers([props.numbers[0], input.target.value])
                }}/>
            </div>

            <button onClick={props.calculateFun}>Generate number</button>
        </div>

    )
}