import React, {Component} from "react";
import Title from './Title'
import {Link, withRouter} from 'react-router-dom'

class Form extends Component{
    state = {
        imageLink: null,
        description: null
    }
    render(){
        return (
            <div>
                <Title titulo={"Photowall"}/>
                <div className="center-obj form-new-photo">
                    <label to="url">URL</label><br/>
                    <input id="imageLink" type="text" onChange={this.updateState} /><br/>
                    <label to="descr">Descrição</label><br/>
                    <input id="description" type="text" onChange={this.updateState} /><br/><br/>
                    <Link className="black-square-button" to="/">Voltar</Link>
                    <button className="black-square-button" onClick={() => this.addPhoto()}>Confirmar</button>
                </div>
            </div>
        );
    }

    updateState = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log('Form State updated');
    };

    addPhoto = (e) => {
        this.props.addPhoto(this.state);
        this.props.history.push('/');
    
    };



}


export default withRouter(Form)