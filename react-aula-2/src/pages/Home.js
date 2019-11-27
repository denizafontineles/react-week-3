import React, { Fragment } from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: '',
            nomes: [
                "deniza", 
                "camila",
                "franc"
            ]
        }
    }
        
        onChangeInput = (e) =>{
        this.setState({value: e.target.value})
        
    }

    adicionarItem = () => {
        this.setState({
            nomes: [
                this.state.value,
                ...this.state.nomes
            ]
        })
    }

    remover = () => {
        this.setState({
            nomes: [
                
            ]
        })
    }

    render(){
        return (
            <Fragment>

                <Input 
                dados="Digite seu nome"
                tipo="text"
                change={this.onChangeInput}>
                </Input>

                <Button
                click={this.adicionarItem}>Cadastrar</Button>

                <ul>
                    {this.state.nomes.map((a, index) => (
                    <li key={index}>{a}</li>
                    <Button
                    click={this.removerItem}>X</Button>
                    ))}
                </ul>

            </Fragment>
        )
    }
}

export default Home