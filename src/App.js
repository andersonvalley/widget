import React from 'react';
import Widget from './components/widget/Widget'
import Header from './components/header/Header'

import CreateWidget from './components/CreateWidget/CreateWidget';


function App() {
  return (
    
    <div className="App">


      <Header />
      <CreateWidget />
      <Widget />
      
    </div>
  );
}

export default App;
