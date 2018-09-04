import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './share-buttons.css';

class ShareButtons extends Component{

    render(){
        return (
            <div className='icon-bar'>
                <a href='#' target="_blank" className='facebook'>
                    <FontAwesomeIcon icon={['fab', 'facebook-square']}/>
                </a>
                <a href='#' target="_blank" className='twitter'>
                    <FontAwesomeIcon icon={['fab', 'twitter-square']}/>
                </a>
            </div>
        )
    }
}

export default ShareButtons;