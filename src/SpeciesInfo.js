import React from 'react';
import './ListElementStyle.css';

class SpeciesInfo extends React.Component {
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
                                <li>classification: {item.classification}</li>
                                <li>designation: {item.designation}</li>
                                <li>average height: {item.average_height}</li>
                                <li>skin color: {item.skin_color}</li>
                                <li>hair colors: {item.hair_colors}</li>
                                <li>eye colors: {item.eye_colors}</li>
                                <li>average lifespan: {item.average_lifespan}</li>
                                <li>language: {item.language}</li>
                            </ul>
                        </div>
                    </body>
                </div>
            );
        }
    }
}

export default SpeciesInfo;