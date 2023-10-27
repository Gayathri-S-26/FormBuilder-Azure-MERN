import React from 'react';
import FormBuilder from './components/FormBuilder';
import FormList from './components/FormList';
import './App.css';

const App = () => {
  
  return (
    <div class="center">
      <br></br><h1>Form Builder</h1>
      <a href="#formlink"><h2>Create Form</h2></a>
      <p id="formlink"><FormBuilder /></p><br></br>
      <a href="#hashLink"><h2>View Saved Forms</h2></a>
      <p id="hashLink"><FormList /></p>
    </div>
  );
};

export default App;
