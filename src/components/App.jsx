import { Component } from 'react';
import Feedback from './Feedback/Feedback';

export class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
        }}
      >
        <Feedback />
      </div>
    );
  }
}
