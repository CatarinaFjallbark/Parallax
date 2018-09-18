import React, { Component } from 'react';
import { Parallax } from 'react-spring';
import HeadLine from './components/HeadLine';
import Header from './components/Header';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Parallax pages={4}>
          <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: 'lightblue' }}>
            <HeadLine title="blååååå" />
          </Parallax.Layer>
          <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: 'pink' }}>
            <HeadLine title="roooosaaa" />
          </Parallax.Layer>
          <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: 'black' }}>
            <HeadLine title="slut" />
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}
export default App;
