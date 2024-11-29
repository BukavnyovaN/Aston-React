import React, { Component } from 'react';
import { MyChildClassComponent } from "../my-child-class-component/my-child-class-component";

import './my-class-component.css';

interface MyClassComponentState {
  inputValue: string;
  submittedValue: string;
}

export class MyClassComponent extends Component<{}, MyClassComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputValue: '',
      submittedValue: ''
    };
  }

  componentDidMount() {
    console.log('Компонент смонтирован.');
  }

  componentDidUpdate(prevProps: {}, prevState: MyClassComponentState) {
    console.log('Компонент обновлен');
    if (prevState.inputValue !== this.state.inputValue) {
      console.log('Значение инпута изменилось на: ', this.state.inputValue);
    }
  }

  componentWillUnmount() {
    console.log('Компонент будет размонтирован');
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.setState({
      submittedValue: this.state.inputValue,
      inputValue: ''
    });
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="Enter your value"
            className="form-input"
          />
          <button
            type="submit"
            className="form-button"
          >
            {(!!this.state.submittedValue && !this.state.inputValue) ? 'Clear' : 'Submit' }
          </button>
        </form>
        <MyChildClassComponent value={this.state.submittedValue}/>
      </div>
    );
  }
}