import React from 'react';
import TwitterList from './TweetList.jsx';
class TweetStream extends React.Component{
  constructor(props){
    super(props);
    this.max = props.max ;
    this.state = {
      currentTweets : []
    };
  }
  // add a new tweet
  //rotate tweet stack to keep only this.max items on screen
  addNewTweet(data){
    if(this.state.currentTweets.length > this.max){
      this.state.currentTweets.pop();
    }
    // add new tweet
    let tweets = this.state.currentTweets;
    tweets.unshift(data);
    this.setState({currentTweets : tweets});
  }
  render(){
    return(
      <div className="tweetstream">
        <h2 className="centered padded featureHeader">Répartition linguistique des tweets</h2>
        <TwitterList items={this.state.currentTweets} />
      </div>
    );
  }
}
export default TweetStream;
