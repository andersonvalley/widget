import React from 'react';
import Widget from './components/widget/Widget'
import Header from './components/header/Header'
import Settings from './components/settings/Settings'
import vk from './img/vk.svg'
import inst from './img/inst.svg'
import CreateWidget from '../src/components/CreateWidget/CreateWidget.jsx'
import ExampleWidget from './components/ExampleWidget/ExampleWidget';


class App extends React.Component {

  state = {
    social: [
      { title: 'vk', photo: { vk }, color: '#000' },
      { title: 'inst', photo: { inst } }
    ]
  }

  render() {

    

    return (

      <div className="App">

        <Header />
        <CreateWidget />
        <Widget />
          

        {
          this.state.social.map((item, index) => {
            
            return (
                
              <Settings 
                title={item.title}
                photo={item.photo}
                key={index}
              />
            )
          })
        }
      </div>
    );

  }
}



export default App;
