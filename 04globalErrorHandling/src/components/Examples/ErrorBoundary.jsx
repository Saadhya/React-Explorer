// import React, { Component } from 'react';

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hasError: false,
//       error: null,
//       errorInfo: null
//     };
//   }

//   componentDidCatch(error, errorInfo) {
//     this.setState({
//       hasError: true,
//       error: error,
//       errorInfo: errorInfo
//     });

//     // You can log the error to an error tracking service here
//     // For example, you can use a service like Sentry or LogRocket
//     // logErrorToMyService(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render a fallback UI here
//       return (
//         <div>
//           <h2>Something went wrong</h2>
//           <p>{this.state.error && this.state.error.toString()}</p>
//           <details style={{ whiteSpace: 'pre-wrap' }}>
//             {this.state.errorInfo && this.state.errorInfo.componentStack}
//           </details>
//         </div>
//       );
//     }

//     // If there is no error, render the child components
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
