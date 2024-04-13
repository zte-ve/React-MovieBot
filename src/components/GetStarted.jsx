import React from 'react'

function GetStarted(props) {
    const startAction = (e)=>{
        console.log(e.target);
        e.target.disabled=true;
        props.actions.startAction();
    }
    return (
        <div>
            <button className="startBtn" onClick={startAction}>
                Let's Get Started
            </button>
        </div>
    )
}

export default GetStarted
