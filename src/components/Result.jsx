

export const Result = (props) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="result w-64 my-6">Between {props.numbers[0]} and {props.numbers[1]}</p>
            <p className="text-white">The result was:</p>
            <div className="result w-64 mt-6">{props.result}</div>
            <button onClick={props.againFun}>Try again</button>
        </div>
    )
}