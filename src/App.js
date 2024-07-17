import React from 'react';
import './styles/styles.css';
import Sidebar from './components/Sidebar';
import Form from './components/PostForm.js';
import Preview from './components/Preview.js'

const App = () => {
  return (
      <div className="app">

        <Sidebar />
        <div className="content">
          <Form />
        </div>
        <div className="Preview">
          <Preview />
          </div>
      </div>
  );
};

export default App;
