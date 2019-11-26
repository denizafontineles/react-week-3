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

    render(){
        return (
            <Fragment>

                <Input 
                dados="Digite seu nome"
                tipo="text"
                change={this.onChangeInput}>
                </Input>

                <Button
                add={this.adicionarItem}
                />

                <ul>
                    {this.state.nomes.map((a, index) => (
                    <li key={index}>{a}</li>
                    ))}
                </ul>

            </Fragment>
        )
    }
}

export default Home