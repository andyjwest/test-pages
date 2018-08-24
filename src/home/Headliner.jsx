import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './headliner.css';

class Headliner extends Component {
    render() {
        return (
            <Link to={"/"+ this.props.topic.path}>
                <div className="headline-container">
                    <img className="headline" src={this.props.backgroundImage} />
                    <div className="headline-text">
                        <ReactMarkdown source={this.props.snipit}/>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Headliner;