const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characters.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacters(index)}>Borrar</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

// class Table extends Component {
//     render() {
//         const {characters} = this.props
//         return (
//             <table>
//                 <TableHeader />
//                 <TableBody characters={characters}/>
//             </table>
//         )
//     }
// }

const Table = (props) => {
    const {characters, removeCharacters} = props
    return (
        <table>
            <TableHeader />
            <TableBody characters={characters} removeCharacters={removeCharacters} />
        </table>
    )
}

export default Table