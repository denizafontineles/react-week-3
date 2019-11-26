import React from 'react'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'

class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            nomes: [
                "teste",
                "reprograma"
            ]
        }
    }

    handleChangeInput = (element) =>{
        this.setState({
            value: element.target.value
        })
    }

    handleAdd = (e) => {
        this.setState({
            nomes:[
                this.state.value,
                ...this.state.value
            ]
        })  
    }

    render(){
        return(
        <div>
            <Input
            frase="Digite seu nome"
            tipo="text"
            change={this.handleChangeInput}
            ></Input>
            <Button
            add={this.handleAdd}
            />

            <ul>
                {this.state.nomes.map((nomeAtual, index) => (
                        <li key={index}> {nomeAtual} </li>
                ))}
                
            </ul>

        </div>
        )
    }
}
export default Home