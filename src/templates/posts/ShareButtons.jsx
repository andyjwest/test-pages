import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './share-buttons.css';
import {shareComment, twitterUserName} from "../properties";

class ShareButtons extends Component{

    constructor(props) {
        super(props);
        this.state = {
            twitterUrl: 'https://twitter.com/intent/tweet' +
                '?url=' + this.props.url +
                '&text=' + shareComment +
                '&via=' + twitterUserName
        }
    }


    render(){
        return (
            <div className='icon-bar'>
                {/*<a href='#' target="_blank" className='facebook'>*/}
                    {/*<FontAwesomeIcon icon={['fab', 'facebook-square']}/>*/}
                {/*</a>*/}
                <a href={this.state.twitterUrl} target='_blank' data-url={this.props.url} className='twitter'>
                    <FontAwesomeIcon icon={['fab', 'twitter-square']}/>
                </a>
            </div>
        )
    }
}

export default ShareButtons;