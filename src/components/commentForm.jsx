import React, { Component } from 'react';

export default class CommentForm extends Component{
    constructor() {
        super();
        this.state = {
        characters: 0
        };
    }

    render(){
        return (
        <form className="comment-form form-horizontal" onSubmit={this._handleSubmit.bind(this)}>
            <label>New comment</label>
            <div className="comment-form-fields form-group">
                <input className="form-control" placeholder="Name:" ref={(input) => this._author = input} />
                <textarea className="form-control" placeholder="Comment:" ref={(input) => this._body = input} onKeyUp={this._getCharacterCount.bind(this)}  ></textarea>
            </div>
            <div className="comment-form-actions">
            <button className="btn btn-primary" type="submit">
                Post comment
            </button>
            </div>
        </form>
        );
    }

    _handleSubmit(event) {
        event.preventDefault();
        
        if(!this._author.value || !this._body.value){
            alert("Please enter your name and comment");
             return;
        }

        this.props.addComment(this._author.value, this._body.value);
        
        this._author.value = '';
        this._body.value = '';
        
        this.setState({ characters: 0  });
  }

    _getCharacterCount(){
        this.setState({characters: this._body.value.length})
    }
}