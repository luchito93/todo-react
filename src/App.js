import { Component } from "react"
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: []
    }

    removeCharacters = (index) => {
        const {characters} = this.state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    addCharacter = (character) => {
        this.setState({
            characters: [...this.state.characters, character]
        })
    }

    render() {
        const {characters} = this.state
        const name = 'Tania'
        const heading = <h1>Hola doona, {name}</h1>
        return (
            <div className="container">
                {heading}
                <Table characters={characters} removeCharacters={this.removeCharacters}/>
                <Form addCharacter={this.addCharacter} />
            </div>
        )
    }
}

export default App