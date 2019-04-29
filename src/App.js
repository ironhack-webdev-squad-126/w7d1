// src/App.js
import React from 'react';
import './App.css';

const name = 'Montasar'

class App extends React.Component {
    render() {

        const toUpperCase = string => {
            return [...string].map(el => el.toUpperCase()).join('')
        }

        const lamaPhotoURL = 'https://ixxidesign.azureedge.net/media/2391858/ixxi-paul-fuentes-fashion-lama.jpg?width=562'

        const styleProperties = {
        }

        const innerElement = (
            <h1 style={styleProperties}>
                {toUpperCase('Hello world!')}
            </h1>
        )

        const element = (
            <div className="App">
                <img  width="150" src={lamaPhotoURL} />
                {innerElement}
            </div>
            );

        return element;
    }
}

export default App;