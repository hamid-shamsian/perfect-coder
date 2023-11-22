import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0,
    message: ""
  };

  handleIncrementAndUpdateMessage = () => {
    // Incorrect: Using value updates:
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ message: `Count: ${this.state.count}` }); // this will not display the updated count!

    // correct: Using functions for updates:
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ message: `Count: ${prevState.count}` }));
  };

  render() {
    return (
      <div className='mx-auto text-center font-bold text-xl mt-20 w-[550px]'>
        <p className='flex justify-between mb-5'>
          current count value: <span>{this.state.count}</span>
        </p>
        <p className='flex justify-between'>
          message based on the current count value: <span>{this.state.message}</span>
        </p>

        <button onClick={this.handleIncrementAndUpdateMessage} className='p-2 bg-green-600 mt-10 text-white'>
          Increase Count
        </button>
      </div>
    );
  }
}

export default App;
