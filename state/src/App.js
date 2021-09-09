
import './App.css';
import Image from "./Image/unsplash.jpg";
import React, { Component } from 'react';
import Profil from "./Component/Profil";

export default class App extends Component {
  state ={
    fullName: "Doumbia vamoussa",
    bio:"j'aime le dev",
    imgSrc: Image , 
    profession: "Etudians",
    show: true
  }
  render() {
    return (
      <div>
                {
                    this.state.show ?
                    <Profil  
                    fullName={this.state.fullName}
                    bio={this.state.bio}
                    imgSrc={this.state.imgSrc}
                    profession={this.state.profession}
                    />
                    :null
                }
                <button className="" onClick={() => this.setState({show: !this.state.show})} >Changer</button>
      </div>
    )
  }
}


