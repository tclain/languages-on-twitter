import React from 'react';
import _ from 'underscore';
import TweetListItem from './TweetListItem.jsx';

class TwitterList extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div classname="twitterlist">
        <div className="ui list">
          {
            _.map(this.props.items, (item) => {
                return <TweetListItem key={`tweet-${_.uniqueId()}`} item={item} />
            })
          }
        </div>
      </div>

    );
  }
}
export default TwitterList;
