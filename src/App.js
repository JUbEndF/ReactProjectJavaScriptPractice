import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <a
            className="App-link"
            href="https://starwars.ru/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Star Wars
        </a>
          </header>
          <div className="App-body">
                <tr>
                    <td>
                        <button className="App-buttom">people</button>
                    </td>
                    <td>
                        <button className="App-buttom">planet</button>
                    </td>
                    <td>
                        <button className="App-buttom">starships</button>
                    </td>
                </tr>
        </div>
    </div>
  );
}
export default App;
