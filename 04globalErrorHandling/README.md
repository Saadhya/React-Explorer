# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# ERROR HANDLING

Here we are handling errors or exceptions in global way

## getDerivedStateFromError() and componentDidCatch()

- it becomes an error boundary.
- getDerivedStateFromError() used to render a fallback UI after an error is thrown and the componentDidcatch() used to log the error information

## error boundaries do not work for

- event handlers
- asynchronous code, rendering lifecycle code
- server side rendering
- errors thrown in error boundary itself (rather than its children)

# react-error-boundary package
https://github.com/bvaughn/react-error-boundary/blob/master/README.md

- it worked using error-boundary package for async operation and server-side rendering
- it works using same syntax as react error-boundary
  <ErrorBoundary
        FallbackComponent={Fallback}
        onError={errorHandler}
        >
    <!-- ?your component -->
    </ErrorBoundary>

- fallback is the rendering component which user will see on getting error
- errorhandler is the function to log info

# steps to install react-error-boundary
1) npm install react-error-boundary
2) create fallback=FallbackComponent={Fallback}
3) create onError={errorHandler}
4) call the component in app.jsx