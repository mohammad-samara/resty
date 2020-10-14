import React from 'react';
import './App.scss';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Footer from './components/footer/footer.js';
import Results from './components/results/results.js';
import History from './components/history/history.js';
import Loader from 'react-loader-spinner';
import { If, Then } from './if/index.js';
import { Route } from 'react-router-dom';

//class App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // key and value pairs
      count: 0,
      results: [],
      headers: [],
      loader: false,
      requstes: [],
    };
  }

  // method to be passed to form
  updataState = async (url, method, body) => {
    this.setState({ loader: true, count: 0 });
    let requstes = this.state.requstes;
    let html = (
      <p key={requstes.length}>
        <span className="span">{method}</span>
        {url}
      </p>
    );
    let local = localStorage.getItem('data') || null;
    if(local){local = JSON.parse(local);}else{local = []}
    local.push({ method, url, body });
    localStorage.setItem('data', JSON.stringify(local));
    requstes.push(html);
    this.setState({ requstes });
    let obj = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (body) obj.body = JSON.stringify(body);
    let data = await fetch(url, obj);
    data.headers.forEach((t) => this.setState({ headers: [t] }));
    data = await data.json();
    this.setState({
      results: data.results || data,
      count: data.count || 1,
      loader: false
    });
  };


  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" exact>
          <div className="test">
            <div>
              <h3>History</h3>
              <div>{this.state.requstes}</div>
            </div>
            <div>
              <Form updataState={this.updataState} />

              <div className="continar">
                <If condition={this.state.count > 0}>
                  <Then>
                    <Results
                      headers={this.state.headers}
                      count={this.state.count}
                      results={this.state.results}
                    />
                  </Then>
                </If>
                <If condition={this.state.loader}>
                  <Then>
                    <Loader
                      type="Circles"
                      color="#00BFFF"
                      height={150}
                      width={150}
                    />
                  </Then>
                </If>
              </div>
            </div>
          </div>
          </Route>
          <Route path="/history" exact>
          <History updataState={this.updataState}></History>
        </Route>
        <Footer />
      </div>
    );
  }
}

export default App;
