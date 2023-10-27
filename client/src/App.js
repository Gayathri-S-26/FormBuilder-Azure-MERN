import React from 'react';
import FormBuilder from './components/FormBuilder';
import FormList from './components/FormList';

const App = () => {
  const mystyle={
    color:"white",
  }
  return (
    <div>
      <h1 style={mystyle}>Form Builder</h1>
      <FormBuilder />
      <a href="#hashLink"><h1 style={mystyle}>Form List</h1></a>
      <p id="hashLink"><FormList /></p>
    </div>
  );
};

export default App;
