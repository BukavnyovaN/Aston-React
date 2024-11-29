import React, { Component } from 'react';

import './my-child-class-component.css';

interface MyChildClassComponentProps {
  value: string;
}

export class MyChildClassComponent extends Component<MyChildClassComponentProps> {
  render() {
    if (!this.props.value) return null;

    return (
      <div className="submitted-value-card">
        <div className="submitted-value-icon">✉️</div>
        <div className="submitted-value-content">
          <h3>Ваше сообщение</h3>
          <p>{this.props.value}</p>
        </div>
      </div>
    );
  }
}
