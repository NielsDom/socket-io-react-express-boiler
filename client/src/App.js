import React, { Component } from 'react';
import openSocket from 'socket.io-client';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      socket: openSocket('http://localhost:5000/')
    }
  }

  componentDidMount = () => {
    const { socket } = this.state
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('channel1', { my: 'data' });
    });
  }

  sendChannel1 = () => {
    const { socket } = this.state
    socket.emit('channel1', { data: 'channel1 client Emit'});
  }

  sendChannel2 = () => {
    const { socket } = this.state
    socket.emit('channel2', { data: 'channel2 client Emit'});
  }

  render() {
    
    return (
      <div className="App">
        <button onClick={this.sendChannel1}>Send channel 1</button>
        <button onClick={this.sendChannel2}>Send channel 2</button>
      </div>
    );
  }
}

export default App;