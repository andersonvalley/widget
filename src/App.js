import React from 'react';
import Widget from './components/widget/Widget'
import Header from './components/header/Header'
import Footer from './components/CreateWidget/Footer'
import Settings from './components/settings/Settings'
import CreateWidget from './components/CreateWidget/CreateWidget'

import {Route} from 'react-router-dom'

class App extends React.Component {

  render() {

    

    return (

      <div className="App">

        {/*localhost:3000*/}
        {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
        <Route path="/" exact render={() => <h1>Home</h1>} /> */}
        <Route path="/settings" exact component={Header} />
        <Route path="/settings" exact component={Widget} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/settings" exact component={Footer} />

        
        <Route path="/" exact component={Header} />
        <Route path="/" exact component={CreateWidget} />
        <Route path="/" exact component={Widget} />
        <Route path="/" exact component={Footer} />

      </div>
    );

  }
}

export default App;
