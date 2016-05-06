import React from 'react';
class Stat extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className="ui statistic">
        <div className="value">
          {this.props.percentage} %
        </div>
        <div className="label">
          {this.props.count} / {this.props.all}
        </div>
      </div>

    );
  }
}
export default Stat;
