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
      reading: false,
      comments: [],
      username: 'Guest',
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
  addComment = (e) => {
    if(e.key == 'Enter') {
      e.preventDefault();
    this.setState({
      comments: [...this.state.comments, {n: this.state.username, p: this.refs.comment_value.value}]
    })
    this.refs.comment_value.value = '';
  }
  }
  normalMode() {
    let time = new Date();
    let timeFormat = time.getHours() + ':' + time.getMinutes();
    return(
      <div>
      <div className='container'>
      <h1>{this.state.content}</h1>
      <p>{this.props.content}</p> <br />
      <button className='rename' onClick={this.handleMode}>E</button>
      <button onClick={this.handleRead}>Show more</button>
      <span className='tag spaner'>{this.props.tag}</span>
      <span>{timeFormat}</span>
      </div>
      <div className='_comments'>
        {this.state.comments.map((item, i) => {
          return(
            <div key={i}>
            <hr />
            <span className='_username'>
            {item.n}:
              </span>
               <span className='_content'>
               {item.p}
               </span>
               <span className='_time'>
               {timeFormat}
               </span>
               </div>
             )})
        }
      </div>
      <div className='_field-div' onKeyDown={(e) => this.addComment(e)}>
      <textarea ref='comment_value' rows='1' className='_field' placeholder='Type anything and press enter'></textarea>
      </div>
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
