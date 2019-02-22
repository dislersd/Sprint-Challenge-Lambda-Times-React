import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      selected: 1
    }
  }
  componentDidMount(){
    this.setState({ images: carouselData})

  }

  leftClick = () => {
    if (this.state.selected === 0 ) {
      this.setState({ selected: 3})
    } else {
    this.setState({ selected: this.state.selected - 1})
    }
  }

  rightClick = () => {
    if (this.state.selected === 3) {
      this.setState({ selected: 0})
    } else {
    this.setState({ selected: this.state.selected + 1})
    }
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.selected]} alt='pic' style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div>{this.selectedImage()}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}