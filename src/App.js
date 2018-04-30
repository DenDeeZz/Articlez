import React, { Component } from 'react';
import Img from 'react-image'
import logo from './edit.png';
import './App.css';
import ReactDOM from 'react-dom';
import dataPosts from './base';
import Post from './Post';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tags: ['#imports', '#javascript', '#objects'],
        base: dataPosts,
        tasks: [dataPosts[0].title, dataPosts[1].title, dataPosts[2].title],
      };
    }
    render() {
      return(
        <div className='post'>
        {
          this.state.tasks.map((item, i) => {
            return(<div><Post content={this.state.base[i].description} tag={this.state.tags[i]} key={i}>{item}</Post> </div>);
          })
        }
        </div>
      )
    }
  }

export default App;
