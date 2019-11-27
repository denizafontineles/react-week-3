import React from 'react'

const Button = (props) =>{
    const {add, children}
    return(
        <button
        type="button"
        onClick={click}
        >{children}</button>
    )
}

export default Button