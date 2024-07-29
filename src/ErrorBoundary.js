// src/components/ErrorBoundary.js
import React, { Component } from 'react';
import { Container, Alert } from 'react-bootstrap';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error occurred:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Alert variant="danger">
            <Alert.Heading>Something went wrong!</Alert.Heading>
            <p>We are sorry, but an error occurred. Please try again later.</p>
          </Alert>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
