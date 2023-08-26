import React, { Component } from 'react'

class SearchBox extends Component {
    render() {
    return (
      <div className="pa2">
        <input
          type="search"
          className="pa3 ba b--green bg-lightest-blue"
          // className="{this.props.className} pa2"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
