import React, { Component } from 'react';
import './App.css'
import Review from './review';
import Cast from './cast';
class Movie extends Component {
    render() {
const casts = this.props.movie.cast.map(acter =>{
    return <Cast castData ={acter} />})
        
        return (

            <div>
                <h2>{this.props.movie.title}</h2>
                <img src={this.props.movie.poster} />
                <h3>  rating : {this.props.movie.rating}</h3>
                <p>{this.props.movie.description}</p>
                <p>director : {this.props.movie.director}</p>
                <p>cast : {this.props.movie.cast.name}</p>

<ul>{casts}</ul>
                  <Review text={this.props.movie.review}/>

            </div>
        );
    }
}

export default Movie;