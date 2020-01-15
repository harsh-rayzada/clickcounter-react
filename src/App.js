import React, { useState } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);

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
  
//   render() {
//   return <div>
//     <p>{this.state.counter}</p>
//     <button onClick={this.add}>Add</button>
//     </div>;
//   }
// }

export default App;