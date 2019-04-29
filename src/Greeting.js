import React from 'react'

class Greeting extends React.Component {
    render() {
        const {firstName, lastName} = this.props.person;

        return (
            <p>Hello {firstName} {lastName}</p>
        )
    }
}

// const Greeting = (props) => { 
//     const {firstName, lastName} = props.person
    
//     return (
//         <p>Hello {firstName} {lastName}</p>
//     )
// }

export default Greeting