import React from 'react';
import './ListElementStyle.css';

class StarshipInfo extends React.Component {
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
                                <li>height: {item.height}</li>
                                <li>model: {item.model}</li>
                                <li>manufacturer: {item.manufacturer}</li>
                                <li>cost in credits: {item.cost_in_credits}</li>
                                <li>length: {item.length}</li>
                                <li>max atmosphering speed: {item.max_atmosphering_speed}</li>
                                <li>crew: {item.crew}</li>
                                <li>passengers: {item.passengers}</li>
                                <li>cargo capacity: {item.cargo_capacity}</li>
                                <li>starship class: {item.starship_class}</li>
                            </ul>
                        </div>
                    </body>
                </div>
            );
        }
    }
}

export default StarshipInfo;