import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//  a fetch function with a reference to an input of slder type
//  async function fetchData(value) {
//    const response = await fetch(`https://api.example.com/data?limit=${value}`);
//    const data = await response.json();
//    return data;
//  }

//  const handleChange = async (event) => {
//    const value = event.target.value;
//    const data = await fetchData(value);
//    // display the fetched data in a table
//    // display the fetched data in a chart
//    // changing the value to slide dynamically through COLOR values
//  }

//  // render the slider
//  ReactDOM.render(<Slider />, document.getElementById('root'));
//  // handle the input change
//  document.getElementById('slider').addEventListener('input', handleChange);
//  document.getElementById('default').addEventListener('click', () => handleChange({ target: { value: 0 } }));
//  document.getElementById('importFromCSV').addEventListener('click', () => fetchData(0));
 // display the fetched data in a table

  
  