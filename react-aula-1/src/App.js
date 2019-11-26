import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Button from './Button'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numero: 10, 
      name: "Bruna"
    };
    this.clickMenos = this.clickMenos.bind(this);
    this.clickMais = this.clickMenos.bind(this);
  }
 clickMenos = () =>{
          this.setState((estadoAnterior)=> ({
            numero: estadoAnterior.numero -1
          }))
 }

 clickMais() {
   this.setState({
     numero: this.state.numero + 1
     });
 }
  
  render() {
    return (
   <Fragment>
        <Button clicar={this.clickMenos}
        classe="menos"
        >-</Button>
        <p> {this.state.numero} </p>
        <Button 
        classe="mais"
        clicar={this.clickMais}>
        +</Button>

        {this.state.numero}
        <Button clicar={()=> alert("Deseja salvar suas alterações ?")}> {this.state.name} </Button>
    </Fragment>
      
    );
  }
}

