import React, { Component } from 'react';
import M from 'materialize-css';

export default class Slider extends Component {

    componentDidMount(){
        var instance = M.Carousel.init({
            fullWidth: true
        });
        console.log(instance);
    }

    render() {
        return (
            <div className="carousel carousel-slider">
                <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4"/></a>
            </div>
        )
    }
}