import React, {Component} from "react";
import Title from './Title'
import PhotoWall from './PhotoWall'
import {Link} from 'react-router-dom'



class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: this.props.posts
        };
        this.removePhoto = this.props.removePhoto.bind(this);
        console.log("Constructor");
    }

    componentDidMount(){
        const data = this.state.posts;
        this.setState({
            posts: data
        });
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
        console.log(prevState.posts);
        console.log(this.state);
    }

    render(){
        console.log("render");
        return (
        <div>
            <Title titulo={"Photowall"}/>
            <div className="center-obj"><Link to="/new" className="black-round-button">+</Link></div>
            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
        </div>
        );
        
    }
}


export default Main;