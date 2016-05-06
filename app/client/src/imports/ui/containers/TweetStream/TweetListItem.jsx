import React from 'react';
class TweeListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){

    let object = this.props.item ;
    let text = object.tweet.text ;
    let lang = object.lang ;
    let userImage = object.tweet.profile_image_url ;
    console.log(userImage);
    return(
      <div className="item">
        <div className="content">
          <div className="header">{lang}</div>
          {text}
        </div>
      </div>
    );
  }
}
export default TweeListItem;
