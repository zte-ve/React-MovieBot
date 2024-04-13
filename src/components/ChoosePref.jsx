import React from 'react'

function ChoosePref(props) {
    const handleClick = (msg) => {
        console.log(props.state.userData.movie.pref);
        const node=document.getElementById('prefContainer');
        for(let i of node.childNodes[0].childNodes) i.disabled=true;
        node.childNodes[1].disabled=true;
        props.state.userData.movie.pref = msg;
        if(props.state.userData.age>=18) props.actions.showAdult();
        else props.actions.genreSelection()
    }
    return (
        <div id='prefContainer'>
            <div className="flex">
                <button className="startBtn" onClick={() => handleClick('movies')}>Movies</button>
                <button className="startBtn" onClick={() => handleClick('TV series')}>TV series</button>
            </div>
            <button className="startBtn singleBtn" onClick={() => handleClick('animes')}>Animes</button>
        </div>
    )
}

export default ChoosePref
