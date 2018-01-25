import React, { Component } from 'react';
import './App.css';
//Components
import Header from './Header/header.js'
import Body from './Body/body.js'
import Footer from './Footer/footer.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      colomToggle: false
    }
    //console.log('outside constructor',this.state.colomToggle)
  }
  //Toggle Colom Event Handler
  colomEventHandler = () => {
    this.setState({
      colomToggle: !this.state.colomToggle
    })
  }

  render() {
    return (
      <div className="App">
       <Header />
       <Body 
          toggle={this.state.colomToggle} 
          click={this.colomEventHandler}
        />
       <Footer />
      </div>
    );
  }
}

export default App;
