import React from 'react';
import Widget from './components/widget/Widget'
import Header from './components/header/Header'
import Settings from './components/settings/Settings'
import vk from './img/vk.svg'
import inst from './img/inst.svg'

class App extends React.Component {

  state = {
    social: [
      { title: 'vk', photo: { vk }, color: '#000' },
      { title: 'inst', photo: { inst } }
    ]
  }

  render() {

<<<<<<< HEAD
import CreateWidget from './components/CreateWidget/CreateWidget';


function App() {
  return (
=======
>>>>>>> 1ddece0731a65ff0ed2e989297c3dd73b124bb90
    

<<<<<<< HEAD

      <Header />
      <CreateWidget />
      <Widget />
      
    </div>
  );
=======
    return (

      <div className="App">

        <Header />
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
>>>>>>> 1ddece0731a65ff0ed2e989297c3dd73b124bb90
}

export default App;
