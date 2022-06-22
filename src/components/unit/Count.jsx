import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [val, setVal] = useState('')

    const backspace = () => {
        try {
            setVal(val.slice(0,-1))
        } catch (error) {
            setVal('')
        }
    }
    const calculate = () => {
        try {
            setVal(eval(val))
        } catch (error) {
            setVal('error')
        }
    }

    return (
        <div>
            <div className='container my-2'>
                <div className="row">
                    <div className="col-12">
                        <h1 className='display-6 fw-bolder text-center text-primary'>
                            calculator
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className='card mb-3 pt-3 shadow ' >
                            <div className="card-body text-primary">
                                <input type="text" className='form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow' value={val} />
                                <div className='row'>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='1' onClick= {(e) => setVal(val + e.target.value)}>1</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='2' onClick= {(e) => setVal(val + e.target.value)}>2</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='3' onClick= {(e) => setVal(val + e.target.value)}>3</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow px-2 py-4 fs-4' value='C' onClick= {() => backspace()}>C/CE</button>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='4' onClick= {(e) => setVal(val + e.target.value)}>4</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='5' onClick= {(e) => setVal(val + e.target.value)}>5</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='6' onClick= {(e) => setVal(val + e.target.value)}>6</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='+' onClick= {(e) => calculate()}>+</button>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='7' onClick= {(e) => setVal(val + e.target.value)}>7</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='8' onClick= {(e) => setVal(val + e.target.value)}>8</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='9' onClick= {(e) => setVal(val + e.target.value)}>9</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='X' onClick= {(e) => setVal(val + e.target.value)}>X</button>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='.' onClick= {(e) => setVal(val + e.target.value)}> .</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='0' onClick= {(e) => setVal(val + e.target.value)}>0</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='=' onClick= {(e) => calculate()}>=</button>
                                    </div>
                                    <div className="col-3">
                                        <button className='btn btn-light text-primary shadow p-4 fs-4' value='/' onClick= {(e) => setVal(val + e.target.value)}>/</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// import { useState } from 'react'

// const Count = ({miProp}) => {
//     const [count, setCount] = useState(0)
//     const handlerClick = (value) => {
//         switch (value) {
//             case "plus":
//                 return (count + value)
//                 break;
//             case "subtract":
//                 return (count - value)
//                 break;
//         }
//         // setCount(count + value)
        
//     }
// return (
//     <>
//         <div>{miProp}</div>
//         <h1>{numero}</h1>
//         <button onClick={() => handlerClick(+1)}> Click </button>
//     </>
// )
// }

export default Count