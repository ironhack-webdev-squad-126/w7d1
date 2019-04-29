// src/App.js
import React from 'react';
import './App.css';
import Greeting from './Greeting'

const name = 'Remy'

class App extends React.Component {
    render() {

        const toUpperCase = string => {
            return string.toUpperCase();
        }

        const lamaPhotoURL = 'https://ixxidesign.azureedge.net/media/2391858/ixxi-paul-fuentes-fashion-lama.jpg?width=562'

        const styleProperties = {
        }

        const innerElement = (
            <h1 style={styleProperties}>
                {toUpperCase('Hello world!')}
            </h1>
        )

        // const innerElement = React.createElement(
        //     'h1',
        //     null,
        //     'Hello world!'
        //     )
        
        const person = {
            firstName: 'John',
            lastName: 'Doe'
        }

        const element = (
            <div className="App">
                <img  width="150" src={lamaPhotoURL} />
                {/* {innerElement} */}
                <Greeting user={person} lang={'fr'}>Ironhack</Greeting>
                <Greeting user={person} lang={'en'}>Ironhack</Greeting>
                <Greeting user={person} lang={'es'}>Ironhack</Greeting>
                <Greeting user={person} lang={'it'}>Ironhack</Greeting>
            </div>
            );

        return element;
    }
}

export default App;