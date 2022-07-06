import './App.css';
import ListElement from './ListElement';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    const handleCLickPeople = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <ListElement />
            </React.StrictMode>
        );
    }
    const handleCLickStarships = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <ListElement />
            </React.StrictMode>
        );
    }
    const handleCLickPlanet = () => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <ListElement />
            </React.StrictMode>
        );
    }
  return (
    <div className="App">
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
                      <button className="App-buttom" onClick={handleCLickPeople}>people</button>
                    </td>
                    <td>
                      <button className="App-buttom" onClick={handleCLickPlanet}>planet</button>
                    </td>
                    <td>
                      <button className="App-buttom" onClick={handleCLickStarships}>starships</button>
                    </td>
                </tr>
        </div>
    </div>
  );
}
export default App;
