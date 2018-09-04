import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './headliner.css';
import HeadlinerSummery from "./HeadlinerSummery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Headliner extends Component {

    render() {
        let image;
        if(this.props.post.cardImage){
            image = <img className="headline" src={this.props.post.cardImage}/>
        }

        return (
            <Link className="headline" to={this.props.post.path}>
                <div className="headline-container">
                    {image}
                    <HeadlinerSummery post={this.props.post}/>
                    <FontAwesomeIcon icon={this.props.post.icon} size="3x"/>
                    {this.props.post.date}
                </div>
            </Link>
        )
    }
}

export default Headliner;