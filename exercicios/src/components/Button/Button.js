import React from 'react'

const Button = (props) => {
    return(
        <button
        type="button"
        onClick={props.add}
        >
        Cadastrar
        </button>
    )
}

export default Button