import React from 'react';
import './App.scss';

import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Footer from './components/footer/footer.js';
import Results from './components/results/results.js';


//class App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // key and value pairs
      count: 0,
      results: [],
      headers: [],
    };
  }

  // method to be passed to form
  updataState = async (url) => {
    let data = await fetch(url);
    this.setState({ headers: data.headers });
    data = await data.json();
    this.setState({
      results: data.results,
      count: data.count,
    });
  };
    // {count: count , results:results}
  

  render() {
    return (
      // I will add Header, Main, Footer
      <React.Fragment>
        <Header />
        <Form updataState={this.updataState} />
        <Results headers={this.state.headers} count={this.state.count} results={this.state.results} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
