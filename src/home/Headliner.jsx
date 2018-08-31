import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './headliner.css';
import HeadlinerSummery from "./HeadlinerSummery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Headliner extends Component {

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

        let text = <div>
            <h1>{this.props.post.name}</h1>
            {this.props.post.snipit}
            </div>;
        if(!this.props.post.snipit){
            text = <ReactMarkdown source={this.props.post.markdown}/>;
        }

        return (

            <div className="headline-container">
                {image}
                <HeadlinerSummery post={this.props.post}/>
                <FontAwesomeIcon icon={this.props.categoryIcon}/>
            </div>
        )
    }
}

export default Headliner;