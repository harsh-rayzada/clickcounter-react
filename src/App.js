import React from 'react';

class App extends React.Component {
  state = {
    counter: 0
  };

  add = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  
  render() {
  return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.add}>Add</button>
    </div>;
  }
}

export default App;