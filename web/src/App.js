import React, {Component} from 'react';
import test from 'core/test';
import { withTheme } from 'styled-components';
//import Test from 'views/Test.view';

alert(test);

var styles2 = {
  margin: '20px',
  width: '200px',
  height: '200px',
  backgroundColor: 'blue',
  display: 'inline-block',
  color:"white",
  fontSize:"40px"
};

class App extends Component {
  render() {
    return <button onClick={() => alert('just clicked a button!')} style={styles2}>BUTTON</button>;
  }
}

export default App;
