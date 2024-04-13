import React from 'react'

function GenreSelection(props) {
    const setGenre=(genre)=>{
        const node=document.getElementById('genreContainer');
        for(let i of node.childNodes){
            for(let j of i.childNodes){
                // console.log(j);
                j.disabled=true;
            }
        }
        props.state.userData.movie.genre=genre;
        console.log(props.state.userData);
        props.actions.selectionComp();
    }
  return (
    <div id='genreContainer'>
      <div className="flex">
        <button className="startBtn actionCont" onClick={()=>setGenre('action')}>Action</button>
        <button className="startBtn comedyCont" onClick={()=>setGenre('comedy')}>Comedy</button>
      </div>
      <div className="flex" style={{marginBlockStart: '0.7rem'}}>
        <button className="startBtn horrorCont" onClick={()=>setGenre('horror')}>Horror</button>
        <button className="startBtn scifiCont" onClick={()=>setGenre('scifi')}>Sci-Fi</button>
      </div>
      <div>
        <button className="startBtn singleBtn romanceCont" style={{marginInlineStart: '5rem'}} onClick={()=>setGenre('romance')}>Romance</button>
      </div>
    </div>
  )
}

export default GenreSelection
