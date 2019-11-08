import React from 'react';

/*
Libraries
*/
import { BrowserRouter as Router } from 'react-router-dom';

/*
Layouts
*/
import Main from './app/layouts/main';

/*
Components
*/
import ScrollToTop from './app/components/scrollReset';

/*
Styling
*/
import './app/_sass/App.scss';


function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
