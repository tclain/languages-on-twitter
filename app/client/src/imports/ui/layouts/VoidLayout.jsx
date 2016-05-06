import React from 'react' ;
export default class VoidLayout extends React.Component{
    render(){
        return (
            <div className="full-height">{this.props.children}</div>
        )
    }
}