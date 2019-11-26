import React from 'react'
import './Button.css'

export default function Button(props){
  console.log(props)
  const propriedades= {
    classe: "",
    click: ()=>{},
    children: "",
    pessoa: [
      {
        nome: "Bruna",
        idade: 15
      },
      {
        nome: "Mayara",
        idade: 16
      }
    ]
  }
  console.log(props);
 const { classe, children, clicar} = props;
 
  return (
     <button className={classe} onClick={clicar}> {children} </button>
  )
}