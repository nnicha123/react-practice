import React, { Component } from 'react'

export class Input extends Component {
    getClassCSS = () => {
        let cssClass = "Input InputElement";
        if(this.props.error.status && this.props.error.isTouched){
            cssClass += " Invalid"
        }else if(this.props.error.isTouched){
            cssClass += " Valid"
        }
        return cssClass;
    }
    render() {
        return (
            <div>
                <input
                onChange={this.props.onChangeInput}
                value={this.props.value}
                name={this.props.name}
                placeholder={this.props.placeholder}
                className={this.getClassCSS()}/>
            <p className="ErrorMessage">{this.props.error.message}</p>
            </div>
        )
    }
}

export default Input
