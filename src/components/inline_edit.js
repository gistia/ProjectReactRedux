import React, { Component } from 'react';
import numeral from 'numeral';

class DisplayWrapper extends Component {
  render() {
    const {
      placeholder, numeric, format, prefix, suffix, onClick
    } = this.props;
    let { value } = this.props;
    let classes = ['display'];

    if (numeric) {
      classes.push('align-right');
    }

    if (numeric && format) {
      value = numeral(value).format(format);
    }

    classes = classes.join(' ');

    return (
      <div className="display-wrapper" onClick={onClick}>
        {prefix ? <span className="prefix">{prefix}</span> : null}

        <span className={classes}>
          {value}
        </span>

        {value ? null :
          <span className={`placeholder ${classes}`}>{placeholder}</span>}

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
     if (event.keyCode === 27) {
       this.props.onCancel(event);
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
