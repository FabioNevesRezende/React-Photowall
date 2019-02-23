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
                    <form onSubmit={this.addPhoto}>
                        <label to="url">URL</label><br/>
                        <input id="imageLink" type="text" onChange={this.updateState} /><br/>
                        <label to="descr">Descrição</label><br/>
                        <input id="description" type="text" onChange={this.updateState} /><br/><br/>
                        <Link className="black-square-button" to="/">Voltar</Link>
                        <button className="black-square-button">Confirmar</button>
                    </form>
                </div>
            </div>
        );
    }

    updateState = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    addPhoto = (e) => {
        e.preventDefault();
        if(this.state.imageLink === null || this.state.description === null || 
            this.state.imageLink === '' || this.state.description === ''  ){
            alert("É necessário preencher o link e a descrição da foto");
            return;
        }
        this.props.addPhoto(this.state);
        this.props.history.push('/');
    
    };



}


export default withRouter(Form)