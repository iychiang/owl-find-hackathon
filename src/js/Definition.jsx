import React, { Component } from 'react';

export default class Definition extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <div className='type'>
          {this.props.type}
        </div>
        <div className='definition'>
          {this.props.definition}
        </div>
        <div className='example'>
          {this.props.example}
        </div>
      </div>
    )
  }
}