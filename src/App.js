import React, { Component } from 'react';
import './App.css';
import data from './base';
import Post from './Post';
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tags: ['#imports', '#javascript', '#objects'],
        base: data,
        // tasks: [dataPosts[0].title, dataPosts[1].title, dataPosts[2].title, dataPosts[3].title],
        tasks: data.map((item, i) => {return(data[i].title)})
      };
    }
    newPost = () => {
      this.setState({
        base: [...data, {title: 'eee', description: 'Wooo'}],
        tasks: [...data, 'swoosh']
      })
      console.log(this.state.base);
    }
    render() {

      return(
        <div className='post'>
        {
          this.state.tasks.map((item, i) => {
            return(<div key={i}><Post content={this.state.base[i].description} tag={this.state.tags[i]} key={i}>{item}</Post> </div>);
          })
        }
        </div>
      )
    }
  }

export default App;
