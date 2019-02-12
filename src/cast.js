import React, { Component } from 'react';
import './App.css';

class Cast extends React.Component {
    render(){

        return(
            <div>
<li>{this.props.castData.name} | in role : {this.props.castData.role}</li>
            </div>
  
        )
    }
}

export default Cast;