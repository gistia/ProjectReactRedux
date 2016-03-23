import React, { Component } from 'react';

class DisplayWrapper extends Component {
  render() {
    const { value, placeholder, prefix, suffix, onClick } = this.props;

    return (
      <div className="display-wrapper" onClick={onClick}>
        {prefix ? <span className="prefix">{prefix}</span> : null}

        <span className="display">
          {value}
        </span>

        {value ? null :
          <span className="placeholder display">{placeholder}</span>}

        <span className="invisible">.</span>

        {suffix ? <span className="suffix">{suffix}</span> : null }
      </div>
    );
  }
}

class InputWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value};

    this.onValueChanged = this.onValueChanged.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    const { input } = this.refs;

    input.focus();
    input.select();
  }

  onValueChanged(event) {
    const { value } = event.target;
    this.setState({ value });
  }

  onKeyDown(event) {
     if (event.keyCode === 13) {
       this.props.onApply(event);
     }
  }

  render() {
    const { type, prefix, suffix, onApply, onCancel } = this.props;
    const { value } = this.state;

    return (
      <div className="input-wrapper">
        <span className="prefix">{prefix}</span>

        <input
          ref="input"
          type={type}
          value={value}
          onChange={this.onValueChanged}
          onKeyDown={this.onKeyDown}
          onBlur={onApply} />

        <span className="suffix">{suffix}</span>

        <a onClick={onCancel}><i className="fa fa-close"></i></a>
      </div>
    );
  }
}

export default class InlineEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false};
    this.onDisplayClicked = this.onDisplayClicked.bind(this);
    this.onDisplayCanceled = this.onDisplayCanceled.bind(this);
    this.onValueChanged = this.onValueChanged.bind(this);
  }

  onDisplayClicked() {
    this.setState({isEditing: true});
  }

  onDisplayCanceled() {
    this.setState({isEditing: false});
  }

  onValueChanged(event) {
    this.setState({isEditing: false});
    this.props.onChange(event);
  }

  render() {
    const { value, placeholder, type, prefix, suffix } = this.props;
    const { isEditing } = this.state;

    return (
      <div className="inline-edit">
        {isEditing ? null : <DisplayWrapper {...this.props}
                                            onClick={this.onDisplayClicked} />}
        {isEditing ? <InputWrapper {...this.props}
                                   onCancel={this.onDisplayCanceled}
                                   onApply={this.onValueChanged} /> : null}
      </div>
    );
  }
}
