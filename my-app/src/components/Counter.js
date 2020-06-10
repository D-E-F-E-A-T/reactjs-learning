import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        
    }

    decrease(){
        this.setState({
            count:this.state.count-1
        },()=>{console.log('Call back value',this.state.count)})
        // this.setState((prevState,props)=>({
        //     count: prevState.count+props.addValue
        // }))
    }
    increment(){
        this.setState({
            count:this.state.count+1
        },()=>{console.log('Call back value',this.state.count)})
    }
    

    render() {
        return (
            <div>
                count - {this.state.count}
                <p></p>
                <button onClick={()=> this.increment()} > Increase</button>
                <button onClick={()=> this.decrease()}>Decrease</button>
            </div>
        )
    }
}

export default Counter
