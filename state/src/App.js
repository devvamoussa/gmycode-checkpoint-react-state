
import './App.css';
import Image from "./Image/unsplash.jpg";
import React, { Component } from 'react';
import Profil from "./Component/Profil";
// import Interval from "./Component/Interval"


export default class App extends Component {
  state ={
    fullName: "Doumbia vamoussa",
    bio:"j'aime le dev",
    imgSrc: Image , 
    profession: "Etudians",
    show: false
  }
  render() {
    return (
      <div className="container">
                {
                    this.state.show ?
                    <Profil  
                    fullName={this.state.fullName}
                    bio={this.state.bio}
                    imgSrc={this.state.imgSrc}
                    profession={this.state.profession}
                    border='1px solid black'/>
                    :null
                }
                <button className="" onClick={() => this.setState({show: !this.state.show})} >Afficher</button>
                {/* <Interval/> */}
      </div>
    )
  }
}


