import React from 'react';

/*
Libraries
*/
import { BrowserRouter as Router } from 'react-router-dom';

/*
Layouts
*/
import Main from './app/layouts/main';


function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
