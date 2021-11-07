import { Component } from "react";

class ApiData extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        fetch(url)
        .then((r) => r.json())
        .then((r) => {
            this.setState({
                data: r
            })
        })
    }

    render() {
        const { data } = this.state

        const dataR = data.map((entry, key) => {
            return <li key={key}>{entry }</li>
        })

        return <ul>{dataR}</ul>
    }
}

export default ApiData