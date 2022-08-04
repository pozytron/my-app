import React, { Component } from 'react'

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
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}> 
      
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { characterData } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}

// class App extends Component {
//   render() {
//     const characters = [
//       {
//         name: 'Charlie',
//         job: 'Janitor',
//       },
//       {
//         name: 'Mawewrvewrberc',
//         job: 'Bouncer',
//       },
//       {
//         name: 'Dee',
//         job: 'Aspring actress',
//       },
//       {
//         name: 'Dennis',
//         job: 'Bartender',
//       },
//     ]

//     return (
//       <div className="container">
//         <Table characterData={characters} />
//       </div>
//     )
//   }
// }

export default Table