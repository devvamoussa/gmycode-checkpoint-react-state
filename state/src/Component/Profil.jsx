import React, { Component } from 'react'

export default class Profil extends Component {


    render() {
        return (
            <div>
                    <img src={this.props.imgSrc} height="300" width="400" alt="" />
                    <h1>{this.props.fullName}</h1>
                    <p>Ma Bio: {this.props.bio} </p>
                    <h4>
                        {this.props.profession}
                    </h4> 
                
            </div>
        )
    }
}
