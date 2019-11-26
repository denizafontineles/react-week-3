import React from 'react'

const Input = (props) => {
    const {frase, tipo, change} = props
    return (
        <input
        placeholder={frase}
        type={tipo}
        onChange={change}
        >
        </input>
    )
}
export default Input