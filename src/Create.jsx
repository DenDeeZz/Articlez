import React, { Component } from 'react';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }
  addNote = () => {
    console.log();
  }
    render() {
      return(
        <div className='createfield'>
        <h1 className='label_create'>Create your article</h1>
        <textarea ref='_title' rows='1' className='area' placeholder='Article title'></textarea>
        <textarea ref='_desc' className='area desc' placeholder='Article content'></textarea>
        <button onClick={this.addNote}>Create</button>
        </div>
      )
    }

}

export default Create;
