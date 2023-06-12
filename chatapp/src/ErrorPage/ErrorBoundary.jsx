import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
    componentDidCatch(error, errorInfo){
      return {hasError: true};
    }
    render() {
      if (this.state.hasError) {
        return (
          <div className='error'>
            <h1>Error!! : Something went wrong..</h1>
          </div>
        );
        
      }
  
      return this.props.children; 
    }
  }