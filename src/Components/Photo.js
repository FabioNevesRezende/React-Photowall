import React, {Component} from "react";
import PropTypes from 'prop-types';

/*
function Photo(props){
    const post = props.post;

    return <figure className="figure">
            <img className="photo" src={post.imageLink} alt={"Image not found"}/>
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
                <button className="remove-button" onClick={() => { props.onRemovePhoto(post) } }>Remove</button>
            </div>
            </figure>;
}

*/

function Photo(props){
    const post = props.post;
    return  (
    <figure className="figure">
        <img className="photo" src={post.imageLink} alt={"Img not found"}/>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container">
            <button className="remove-button" onClick={() => { props.onRemovePhoto(post) } }>Remove</button>
        </div>
    </figure>
    );
    
}

Photo.propTypes = {
    //key: PropTypes.number.isRequired,
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
};


export default Photo