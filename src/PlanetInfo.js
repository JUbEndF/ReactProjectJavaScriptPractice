import React from 'react';
import './ListElementStyle.css';

class PlanetInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            item: null
        };
    }
    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }
    render() {
        const { error, isLoaded, item } = this.state;
        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
                <div className='App-List'>
                    <header className="App-header">
                        <table height="70px">
                            <h1>Star Wars</h1>
                        </table>
                    </header>
                    <body className="App-body">
                        <div>
                            <h2>{item.name}</h2>
                            <ul>
                                <li>rotation period: {item.rotation_period}</li>
                                <li>orbital period: {item.orbital_period}</li>
                                <li>diameter: {item.diameter}</li>
                                <li>climate: {item.climate}</li>
                                <li>gravity: {item.gravity}</li>
                                <li>terrain: {item.terrain}</li>
                                <li>surface water: {item.surface_water}</li>
                                <li>population: {item.population}</li>
                            </ul>
                        </div>
                    </body>
                </div>
            );
        }
    }
}

export default PlanetInfo;