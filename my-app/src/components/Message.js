import React, { Component } from 'react'
class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'I hate You'
        }
    }

    changeMessage(){
        this.setState({
            message:'I love you too'
        })
    }
    revertMessage(){
        this.setState({
            message:'I hate you'
        })
    }
    
    render(){
    return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeMessage()}>Love</button>
            <button onClick={()=>this.revertMessage()}>Dislike </button>
        </div>
    ) 
    }
}

export default Message    