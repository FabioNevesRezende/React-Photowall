import React from "react";
import Title from './Title'
import PhotoWall from './PhotoWall'
import {Link} from 'react-router-dom'

function Main (props){
    return (
    <div>
        <Title titulo={"Photowall"}/>
        <div className="center-obj"><Link to="/new" className="black-round-button">+</Link></div>
        <PhotoWall posts={props.posts} onRemovePhoto={props.removePhoto}/>
    </div>
    );
}


export default Main;