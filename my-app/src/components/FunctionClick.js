import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Buttonclickerd')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    )
}

export default FunctionClick
