import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const wasm = import('../build/rusty_react');

wasm.then((m) => {
  const App = () => {
    const [name, setName] = useState('');
    const handleChange = (e) => {
      setName(e.target.value);
    };
    const handleClick = () => {
      m.welcome(name);
    };

    return (
      <>
        <div>
          <h1>This is a Web Assembly with Rust for Fast React Components</h1>
          <button onClick={m.big_computation}>Run Computation</button>
        </div>
        <div>
          <input type='text' onChange={handleChange} />
          <button onClick={handleClick}>Say hello!</button>
        </div>
      </>
    );
  };

  ReactDOM.render(<App />, document.getElementById('root'));
});
