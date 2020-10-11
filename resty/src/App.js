import React from 'react';
import './App.scss';

import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <React.Fragment>
    <Header/>
    <Form/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
