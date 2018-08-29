import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './headliner.css';

class HeadlinerSummery extends Component {

    render() {
        let image;
        let headlineClass = 'headline-text';
        if(this.props.post.cardImage){
            image = <Link to={this.props.post.path}>
                <img className="headline" src={this.props.post.cardImage}/>
            </Link>;
        }else{
            headlineClass = 'headline-text-only';
        }

        return (
            <div className={headlineClass}>
                <h1>{this.props.post.category}</h1>
                <h2>{this.props.post.name}</h2>
                <p>{this.props.post.snipit}</p>
            </div>
        )
    }
}

export default HeadlinerSummery;