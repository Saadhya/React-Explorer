import { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";

class BuggyCounter extends Component {  
    constructor(props) {  
      super(props);  
      this.state = { counter: 0 };  
      this.handleClick = this.handleClick.bind(this);  
    }  
      
    handleClick() {  
      this.setState(({counter}) => ({  
        counter: counter + 1  
      }));  
    }  
      
    render() {  
      if (this.state.counter === 3) {  
        throw new Error('I crashed!');  
      }  
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;  
    }  
  }  
    
  function BoundaryError() {  
    return (  
      <div>  
        <p><b>Example of Error Boundaries</b></p>  
        <hr />  
        <ErrorBoundary>  
          <p>These two counters are inside the same error boundary.</p>  
            <BuggyCounter />  
            <BuggyCounter />  
        </ErrorBoundary>  
        <hr />  
        <p>These two counters are inside of their individual error boundary.</p>  
          <ErrorBoundary><BuggyCounter /></ErrorBoundary>  
          <ErrorBoundary><BuggyCounter /></ErrorBoundary>  
      </div>  
    );  
  }  
  export default BoundaryError;  