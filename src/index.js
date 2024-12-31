// a basic slider component 
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// define the slider component

// const url = 'http://localhost/3333';

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
      <div style={{ width: '100%', height: '100px', backgroundColor: `hsl(${value}, 50%, 50%)` }}></div>
      </>
  );
}

// render the slider
ReactDOM.render(<Slider />, document.getElementById('root'));
