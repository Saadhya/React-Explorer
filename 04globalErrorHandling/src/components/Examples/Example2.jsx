import React, { Component } from 'react';

class Example2 extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        // The ErrorBoundary will catch this error and display a fallback UI
        throw new Error(error);
      });
  }

  render() {
    // Accessing data or rendering components that might throw an error
    return (
      <div className='text-center text-3xl'>
       {this.state.data && <p>Data: {this.state.data[0].name.common}</p>}
      </div>
    );
  }
}

export default Example2;
