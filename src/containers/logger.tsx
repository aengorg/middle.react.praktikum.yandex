import React, { Component } from 'react';

interface ILoggerProp {}

export function withLogger<P>(WrappedComponent: React.ComponentType<P>) {
  return class extends Component<P & ILoggerProp> {
    componentDidUpdate(prevProps: any) {
      // ! отключено что бы не создавать шум в консоли
      // console.log('old props: ', prevProps);
      // console.log('new props: ', this.props);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
