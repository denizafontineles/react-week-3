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
                ...this.state.nomes
            ]
        })  
    }

    handleRemove = (item) => { 
            let array = this.state.nomes.filter(nome => 
                nome !== item
            )
            this.setState({
                    nomes: array 
            })
            console.log(array);
            
    }

    render() {
        return (
            <div>
                <Input
                    frase="Digite seu nome"
                    tipo="text"
                    change={this.handleChangeInput}
                ></Input>
                <Button
                    click={this.handleAdd}>
                    Cadastrar
            </Button>


                <ul>
                    {this.state.nomes.map((nomeAtual, index) => {
                        return(
                        <div key={index}>
                        <li>{nomeAtual}</li>
                            <Button click={() => this.handleRemove(nomeAtual)}>X</Button>
                        </div>
                        )
                    }
                    )}

                </ul>

            </div>
        )
    }
}
export default Home