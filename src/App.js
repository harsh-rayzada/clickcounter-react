import React, { useState, useEffect } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      document.title = `${counter} times`
    });

    const increment = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={increment}>Add</button>
        </div>
    )
};

// class App extends React.Component {
//   state = {
//     counter: 0
//   };

//   add = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }

//   componentDidMount(){
//     document.title = `${this.state.counter} times`;
//   }

//   componentDidUpdate(){
//     document.title = `${this.state.counter} times`;
//   }

//   render() {
//     return <div>
//       <p>{this.state.counter}</p>
//       <button onClick={this.add}>Add</button>
//     </div>;
//   }
// }

export default App;