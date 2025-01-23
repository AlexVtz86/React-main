// a basic slider component 
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// define the slider component

const url = 'http://localhost:3000';

function Slider() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  }

  return (
  < >
      {/* // changing the value to slide dynamically through COLOR values */}
      <span><p> בחר כמות מטופלים : {value}</p></span>
      <input type="range" min="0" max="17000" value={value} onChange={handleChange}/>
      <button id="default" onClick={() => setValue(0)}>אפס הכל</button>
      <button id="importFromCSV">הצג טבלה</button>
      {/* <div style={{ width: '100%', height: '100px', backgroundColor: `hsl(${value}, 50%, 50%)` }}></div> */}
      {/* // a line of code to import from localhost location */}
        
      </>
  );
}

// render the slider
ReactDOM.render(<Slider />, document.getElementById('root'));

function DataForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ queryInput: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Failed to execute query');
      }

      const data = await response.json();
      console.log('Query result:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Query Input:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}


ReactDOM.render(<DataForm />, document.getElementById('root2'));


export default DataForm;
