import React from 'react'

class Greeting extends React.Component {
    render() {
        const greetings = {
            fr: 'Bonjour',
            en: 'Hello',
            it: 'Ciao',
            es: 'Hola'
        }

        const {firstName, lastName} = this.props.user;
        const {lang} = this.props; // const lang = this.props.lang


        // let greetingStr = ''

        // if (lang === 'en') greetingStr = 'Hello'
        // else if (lang === 'fr') greetingStr = 'Bonjour'
        // else if (lang === 'es') greetingStr = 'Hola'
        // else if (lang === 'it') greetingStr = 'Ciao'

        let greetingStr = greetings[lang]

        return (
            <p>{greetingStr} {firstName} {lastName}</p>
        )
    }
}

// const Greeting = (props) => { 
//     const {firstName, lastName} = props.user
    
//     return (
//         <p>Hello {firstName} {lastName}</p>
//     )
// }

export default Greeting