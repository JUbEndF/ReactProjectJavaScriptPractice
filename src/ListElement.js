import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
class ListElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            count: 0,
            items: [],
            next: null,
            previous: null
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

    handleClick(buttonName) {
        switch (buttonName) {
            case 'Next':
                if (this.state.next != null) {
                    root.render(
                        <React.StrictMode>
                            <ListElement url={this.state.next} />
                        </React.StrictMode>
                    );
                }
                break;
            case 'Previous':
                if (this.state.previous != null) {
                    root.render(
                        <React.StrictMode>
                            <ListElement url={this.state.previous} />
                        </React.StrictMode>
                    );
                }
                break;
            default:
                break;
        }
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
                            <button className="App-buttom" onClick={this.handleClick.bind(this, "Previous")}>Previous</button>
                        </td>
                        <td>
                            {items.map(item =>
                                <tr key={item.name}>
                                    <td> <button className="btn">{item.name}</button> </td>
                                </tr>)
                            }
                        </td>
                        <td>
                            <button className="App-buttom" onClick={this.handleClick.bind(this, "Next")}>Next</button>
                        </td>
                    </table>
                </div>
            );
        }
    }
}

export default ListElement;