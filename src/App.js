import './App.css';
import ListElement from './ListElement';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
class App extends React.Component {
    handleClick(buttonName) {
        switch (buttonName) {
            case 'People':
                root.render(
                    <React.StrictMode>
                        <ListElement url="https://swapi.dev/api/people/" />
                    </React.StrictMode>
                );
                break;
            case 'Starships':
                root.render(
                    <React.StrictMode>
                        <ListElement url="https://swapi.dev/api/starships/" />
                    </React.StrictMode>
                );
                break;
            case 'Vehicles':
                root.render(
                    <React.StrictMode>
                        <ListElement url="https://swapi.dev/api/vehicles/" />
                    </React.StrictMode>
                );
                break;
            case 'Planets':
                root.render(
                    <React.StrictMode>
                        <ListElement url="https://swapi.dev/api/planets/" />
                    </React.StrictMode>
                );
                break;
            case 'Species':
                root.render(
                    <React.StrictMode>
                        <ListElement url="https://swapi.dev/api/species/" />
                    </React.StrictMode>
                );
                break;
            case 'Films':
                root.render(
                    <React.StrictMode>
                        <ListElement url="https://swapi.dev/api/films/" />
                    </React.StrictMode>
                );
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div className='App'>
                <div className="App-header">
                    <div className="inner">
                        <a
                            className="App-link"
                            href="https://starwars.ru/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Star Wars
                        </a>
                        <span id="test"></span>
                    </div>
                </div>
                <div className="App-body">
                    <tr>
                        <td>
                            <button className="App-buttom" onClick={this.handleClick.bind(this, "People")}>People</button>
                        </td>
                        <td>
                            <button className="App-buttom" onClick={this.handleClick.bind(this, "Planets")}>Planets</button>
                        </td>
                        <td>
                            <button className="App-buttom" onClick={this.handleClick.bind(this, "Starships")}>Starships</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="App-buttom" onClick={this.handleClick.bind(this, "Vehicles")}>Vehicles</button>
                        </td>
                        <td>
                            <button className="App-buttom" onClick={this.handleClick.bind(this, "Species")}>Species</button>
                        </td>
                        <td>
                            <button className="App-buttom" onClick={this.handleClick.bind(this, "Films")}>Films</button>
                        </td>
                    </tr>
                </div>
            </div>
        );
    }
}
export default App;
