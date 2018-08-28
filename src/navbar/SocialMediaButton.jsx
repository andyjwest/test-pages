import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SocialMediaButton extends Component{

    render(){
        return (
            <a className="social-media-icon" target="_blank" href={this.props.href}>
                <FontAwesomeIcon icon={this.props.icon}/>
            </a>
        )
    }
}

export default SocialMediaButton;