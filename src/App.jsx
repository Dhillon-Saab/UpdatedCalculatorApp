import React, { useState } from 'react';
import './App.css';
import Display from './personal_components/Display';
import Keypad from './personal_components/Keypad';
// TODO: Import Keypad and Display components once implemented.

function App() {
  const [input, setInput] = useState('');

  // Handle input
  function handleInput(e) {
    // TODO: Implement handleInput to update the input state.
    if((input.includes('×') || input.includes('÷') || input.includes('−') || input.includes('+')) && (e.target.textContent.includes('×') || e.target.textContent.includes('÷') || e.target.textContent.includes('−') || e.target.textContent.includes('+'))){
      alert('The user statement already contains an operator');
    }else if((input == '0' || input == '') && ((e.target.textContent == '×' || e.target.textContent == ('÷') || e.target.textContent == ('−') || e.target.textContent == ('+')))){
      alert('The user statement already contains an operator');
    }
    else{
    setInput(input + e.target.textContent);
    }
  }

  function seperation(operator){
    let value_1_str = input.slice(0, input.indexOf(operator))
    let value_2_str = input.slice((input.indexOf(operator)+1), input.length);

    let value_1 = parseFloat(value_1_str);
    let value_2 = parseFloat(value_2_str);

    var values = {value1:value_1, value2:value_2};

    return values;
  }

  // Calculate the result
  function calculate() {
    // TODO: Implement calculation logic safely here.

    if(input.includes("×")){
      let values = seperation('×');

      setInput(values.value1 * values.value2);

    }else if(input.includes("÷")){
      let values = seperation('÷');

      if(values.value2 != 0){
        setInput((values.value1 / values.value2).toFixed(2));
      }
      else{
        setInput("Can't Divide by Zero");
      }
    }else if(input.includes("−")){
        let values = seperation('−');

      setInput(values.value1 - values.value2);
    }else if(input.includes("+")){
      let values = seperation('+');

      setInput(values.value1 + values.value2);
    }else{
      alert('The Operation is invalid');
    }

  }

  // Clear the input
  function clear() {
    // TODO: Implement clear functionality.
    setInput('');

  }

  //Remove the last mistake
  function remove() {
    // TODO: Implement clear functionality.
    setInput(input.slice(0, (input.length-1)));

  }

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
        <Display input={input}/>
      
        <Keypad onInput={handleInput} onClear={clear} onCalculate={calculate} onRemove={remove}/>
      {/* TODO: Render the Display component and pass the current input as a prop. */}
      {/* TODO: Render the Keypad component and pass handleInput, calculate, and clear as props. */}
    </div>
  );
}

export default App;
