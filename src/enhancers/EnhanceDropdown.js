import React, { Component } from 'react';

export const EnhanceDropdown = ComposedComponent => class extends Component {
  constructor() {
    super();
    this.state = { isOpen: false };
    this.onToggle = this.onToggle.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }
  componentDidMount() {
    window.addEventListener('click', this.handleDocumentClick)
  }
  componentWillUnmount () {
    window.removeEventListener('click', this.handleDocumentClick)
  }
  handleDocumentClick() {
    if(this.state.isOpen) {
      this.onToggle();
    }
  }
  onToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  onSelect(option) {
    this.onToggle(); // Close dropdown
    if(this.props.onSelect) this.props.onSelect(option);
  }
  render() {
    return  (
      <div onClick={(e) => e.stopPropagation()}>
        <ComposedComponent {...this.props}
          onToggle={this.onToggle}
          isOpen={this.state.isOpen}
          optionSelected={this.props.optionSelected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
};