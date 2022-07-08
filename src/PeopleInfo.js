import React from 'react';
import ReactDOM from 'react-dom/client';
import './ListElementStyle.css';

class PeopleInfo extends React.Component {
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
                                <li>mass: {item.mass}</li>
                                <li>hair color: {item.hair_color}</li>
                                <li>skin color: {item.skin_color}</li>
                                <li>eye color: {item.eye_color}</li>
                                <li>birth year: {item.birth_year}</li>
                                <li>gender: {item.gender}</li>
                            </ul>
                        </div>
                    </body>
                </div>
            );
        }
    }
}

export default PeopleInfo;