import React from 'react'


export default function NameInfo(props) {
    if(props.nameInfo.age){
    return (
        <div class="container bg-danger text-white nameInfo">
            <h1 class="display -4">{props.nameInfo.name}</h1>
            <h1 class="display-1">{props.nameInfo.age} Y.O.</h1>
            <h1>There are {props.nameInfo.count} {props.nameInfo.name }s on this Earth</h1>
            <p>(Based on our data)</p>
        </div>
    )
    }
    return(
        <>
        </>
    )
}
