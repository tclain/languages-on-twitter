ui three column gridmp

      ort React from 'react';
class TweetStats extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className="ui three column grid tweetstats">
        <div className="blue column">
            Français
            
        </div>
        <div className="orange column">
            Anglais
        </div>
        <div className="olive column">
            Japonais
        </div>
      </div>
    );
  }
}
export default TweetStats;
