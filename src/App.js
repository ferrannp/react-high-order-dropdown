import React  from 'react';
import { EnhanceDropdown as enhancer } from './enhancers/EnhanceDropdown';
import { Dropdown } from './components/Dropdown';
import './App.scss';

const EnhancedDropdown = enhancer(Dropdown);

const App = React.createClass({

  getInitialState() {
    // In a complex app, this might be part of a reducer if using Redux and this component could be
    // a container component
    return {
      optionSelected: 0,
      data: ['Option 0', 'Option 1', 'Option 2'],
      isSecondOpen: true
    };
  },

  render() {
    return (
      <div className='app'>
        <div>
          <h4>Enhanced Dropdown</h4>
          <EnhancedDropdown
            optionSelected={this.state.optionSelected}
            onSelect={(option) => this.setState( { optionSelected: option })}
            data={this.state.data}
          />
        </div>
        <div>
          <h4>Stateless Dropdown</h4>
          <div>
            <button onClick={() => this.setState ( { isSecondOpen: !this.state.isSecondOpen })}>
              {this.state.isSecondOpen ? "Close" : "Open"}
            </button>
            <Dropdown
              isOpen={this.state.isSecondOpen /* WRITE whatever open/close logic you want here */}
              optionSelected={this.state.optionSelected}
              onSelect={(option) => this.setState( { optionSelected: option })}
              data={this.state.data}
            />
          </div>
        </div>
      </div>
    );
  }
});

export default App;
