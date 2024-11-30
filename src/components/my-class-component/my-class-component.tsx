import React, { Component, createRef } from 'react';
import { MyChildClassComponent } from "../my-child-class-component/my-child-class-component";

import './my-class-component.css';
import { MyFunctionComponent } from "../my-function-component/my-function-component";

interface MyClassComponentState {
  inputValue: string;
  submittedValue: string;
  isButtonDisabled: boolean;
}

export class MyClassComponent extends Component<{}, MyClassComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputValue: '',
      submittedValue: '',
      isButtonDisabled: false
    };
  }

  private inputRef = createRef<HTMLInputElement>();

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

  handleInputFocus = (event: React.FormEvent) => {
    event.preventDefault();
    this.inputRef.current?.focus();
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value.includes('реакт')) {
      this.setState({isButtonDisabled: true, inputValue: event.target.value});
    } else {
      this.setState({isButtonDisabled: false, inputValue: event.target.value});
    }
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
            ref={this.inputRef}
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="Enter your value"
            className="form-input"
          />
          <button
            type="submit"
            className="form-button"
            disabled={this.state.isButtonDisabled}
          >
            {(!!this.state.submittedValue && !this.state.inputValue) ? 'Clear' : 'Submit'}
          </button>
          <button
            className="form-button focus"
            onClick={this.handleInputFocus}
          >
            Focus on Input
          </button>
        </form>
        <MyChildClassComponent value={this.state.submittedValue}/>
        <MyFunctionComponent value={this.state.submittedValue}/>
      </div>
    );
  }
}