import React from 'react'

function YesNo(props) {
    const handleClick=(e,pref=false)=>{
        const node=e.target.parentNode;
        for(let i of node.childNodes) i.disabled=true;
        props.state.userData.movie.showAdult=pref;
        props.actions.genreSelection();
    }
  return (
    <div className="flex">
      <button className="startBtn" onClick={(e)=>handleClick(e,true)}>Yes</button>
      <button className="startBtn" onClick={(e)=>handleClick(e)}>No</button>
    </div>
  )
}

export default YesNo
