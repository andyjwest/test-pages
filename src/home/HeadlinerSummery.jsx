import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './headliner.css';

class HeadlinerSummery extends Component {

    render() {
        let headlineClass = 'headline-text';
        if(!this.props.post.cardImage){
            headlineClass = 'headline-text-only';
        }

        return (
            <div className={headlineClass}>
                <Link to={this.props.post.path}>
                    <h1>{this.props.post.category}</h1>
                </Link>
                <h2>{this.props.post.name}</h2>
                <p className="snipit">{this.props.post.snipit}</p>
            </div>
        )
    }
}

export default HeadlinerSummery;