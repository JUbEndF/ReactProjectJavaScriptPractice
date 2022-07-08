import React from 'react';
import ReactDOM from 'react-dom/client';
import PeopleInfo from './PeopleInfo';
import FilmInfo from './FilmInfo';
import PlanetInfo from './PlanetInfo';
import SpeciesInfo from './SpeciesInfo';
import StarshipInfo from './StarshipInfo';
import VehicleInfo from './VehicleInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
class ListElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            count: 0,
            items: [],
            next: "null",
            previous: "null"
        };
    }
    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        count: result.count,
                        items: result.results,
                        next: result.next,
                        previous: result.previous
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

    handleInfoClick(currentUrl) {
        if (currentUrl.indexOf("people") !== -1) {
            root.render(
                <React.StrictMode>
                    <PeopleInfo url={currentUrl} />
                </React.StrictMode>
            );
        } else if (currentUrl.indexOf("starships") !== -1) {
            root.render(
                <React.StrictMode>
                    <StarshipInfo url={currentUrl} />
                </React.StrictMode>
            );
        } else if (currentUrl.indexOf("planets") !== -1) {
            root.render(
                <React.StrictMode>
                    <PlanetInfo url={currentUrl} />
                </React.StrictMode>
            );
        } else if (currentUrl.indexOf("vehicles") !== -1) {
            root.render(
                <React.StrictMode>
                    <VehicleInfo url={currentUrl} />
                </React.StrictMode>
            );
        } else if (currentUrl.indexOf("species") !== -1) {
            root.render(
                <React.StrictMode>
                    <SpeciesInfo url={currentUrl} />
                </React.StrictMode>
            );
        } else {
            root.render(
                <React.StrictMode>
                    <FilmInfo url={currentUrl} />
                </React.StrictMode>
            );
        }
    }

    handleClick(url) {
        if (url == null) {
            return;
        }
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        next: result.next,
                        prev: result.previous,
                        count: result.count,
                        items: result.results
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
        const { error, isLoaded, count, items } = this.state;
        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
                <div>
                    <header>
                        <tr>
                            <h1>List</h1>
                        </tr>
                        <tr>
                            <p> Count = {count} </p>
                        </tr>
                    </header>
                    <table align="center" cellSpacing="15">
                        <td>
                            <button className="App-buttom" onClick={this.handleClick.bind(this, this.state.previous)}>Previous</button>
                        </td>
                        <td>
                            {items.map(item =>
                                <tr key={item.name}>
                                    <td>
                                        <button className="App-buttom" onClick={this.handleInfoClick.bind(this, item.url)}>{item.name} {item.title}</button>
                                    </td>
                                </tr>)
                            }
                        </td>
                        <td>
                            <button className="App-buttom" onClick={this.handleClick.bind(this, this.state.next)}>Next</button>
                        </td>
                    </table>
                </div>
            );
        }
    }
}

export default ListElement;