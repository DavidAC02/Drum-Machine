import { render } from "@testing-library/react";
import React from "react";
import "../style-sheet/Boton.css";

class Boton extends React.Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.handleKeydown=this.handleKeydown.bind(this)
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  }
  
  handleKeydown=(event)=>{
    if (event.keyCode===this.props.letter.charCodeAt()){
      this.audio.play()
      this.audio.currentTime=0
      this.props.display(this.props.name)

    }
  };

  handleClick=()=>{
    this.audio.play()
    this.audio.currentTime=0
    this.props.display(this.props.name)
  }
  render(){
  return(
    <button
      className="boton"
      onClick={this.handleClick}
    >
      <audio 
      id={this.props.letter}
      src={this.props.link}
      ref={ref => this.audio = ref}
      ></audio>
      {this.props.children}
    </button>
  );
  }
}

export default Boton;