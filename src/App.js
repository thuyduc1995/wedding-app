import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import MainContent from './components/MainContent/MainContent';

library.add(faStroopwafel);

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContent />
      </div>
    );
  }
}

export default App;
