import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom"
import Form from './Form'
import Main from './Main'

class Routed extends Component{

    constructor(props){
        super(props);
        this.state = {
            posts: require('./posts.json')
        };
        this.addPhoto = this.addPhoto.bind(this);
        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(postRemoved){
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: this.state.posts.filter(post => post !== postRemoved )
        }) );
    }

    addPhoto(photoElem){
        photoElem.id = this.getNextPostId();
        console.log('Adicionando nova imagem, url: ' + photoElem.imageLink + ' descrição: ' + photoElem.description + ' id: ' + photoElem.id);
        let postsCopy = [...this.state.posts, photoElem];
        this.setState({
            posts: postsCopy
        });
    }

    getNextPostId = () => {
        var ret = 0;
        this.state.posts.forEach((post, index) => {
            ret = index
        });
        return ret + 1;
    }

    render(){
        console.log("Routing...");
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" render={(props) => <Main posts={this.state.posts} removePhoto={this.removePhoto}/>}/>
                    <Route path="/new" render={(props) => <Form addPhoto={this.addPhoto}/>}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routed