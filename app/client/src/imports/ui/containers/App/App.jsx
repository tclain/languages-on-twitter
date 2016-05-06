import React from 'react';
import TweetStream from '../TweetStream/TweetStream.jsx';
import IO from '../../../services/socket/IO.js';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.io = new IO(`http://${document.domain}:${location.port}/twitter`);
  }
  componentDidMount(){
    console.log()
    this.io.socket.on('server.tweet.new', (data) => {
        this.refs.stream.addNewTweet(data);
    })
  }
  render(){
    return(
      <div className="ui one column container grid full-height">
        <div className="column tweetstream">
          <TweetStream max={30} ref="stream" />
        </div>
      </div>
    );
  }
}
export default App;
