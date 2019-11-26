import React from 'react'

import './Input.css'

const Input = (props) => {
   const { tipo, dados, change} = props

    return(
        <input
        type={tipo}
        placeholder={dados}
        className="input"
        onChange={change}
        ></input>
        
    )
}

export default Input