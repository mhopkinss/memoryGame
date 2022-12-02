import React from 'react'
import ReactDOM from 'react-dom'

function Card(props){
    return(
<div onClick={props.handleClick} id={props.id} className='card'>
    <h1>{props.name}</h1>
    <img src={props.url}></img>
</div>
    )
}

export default Card