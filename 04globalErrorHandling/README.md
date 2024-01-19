# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# ERROR HANDLING
Here we are handling errors or exceptions in global way

## getDerivedStateFromError() and componentDidCatch()
- it becomes an error boundary.
- getDerivedStateFromError() used to render a fallback UI after an error is thrown and the componentDidcatch() used to log the error information

## error boundaries do not work for
- event handlers
- asynchronous code,  rendering lifecycle code
- server side rendering
- errors thrown in error boundary itself (rather than its children)

# react-error-boundary package