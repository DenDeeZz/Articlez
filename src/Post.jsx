import React, { Component } from 'react';
import Img from 'react-image'
import logo from './edit.png';
import './App.css';
import ReactDOM from 'react-dom';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      content: this.props.children,
      cont: this.props.children,
      reading: false
    }
  }
  handleMode = () => {
    this.setState({
      editing: !this.state.editing
    })
  }
  saveResult = () => {
    this.setState({
      editing: !this.state.editing,
      content: this.refs.refTxt.value,
      cont: this.refs.refTxt.value
    })
  }

  handleRead = () => {
    this.setState({
      reading: !this.state.reading
    })
  }

  readingMode() {
    return(
      <div className='container reading'>
      <h1>{this.state.content}</h1>
      <p>{this.props.content}</p> <br />
      <button onClick={this.handleRead}>Hide</button>
      </div>
    )
  }
  normalMode() {
    let time = new Date();
    let timeFormat = time.getHours() + ':' + time.getMinutes();
    return(
      <div className='container'>
      <h1>{this.state.content}</h1>
      <p>{this.props.content}</p> <br />
      <button className='rename' onClick={this.handleMode}>E</button>
      <button onClick={this.handleRead}>Show more</button>
      <span className='tag'>{this.props.tag}</span>
      <span>{timeFormat}</span>
      </div>
    )
  }

  editMode() {
    return(
      <div className='container'>
      <textarea ref='refTxt' defaultValue={this.state.cont} /> <br />
      <button onClick={this.saveResult}>Save</button>
      </div>
    );
  }
  render() {
if(this.state.reading) {
return this.readingMode();
}
else if(this.state.editing) {
return this.editMode();
}
else return this.normalMode();
  }
}

export default Post;
