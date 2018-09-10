import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Headliner extends Component {

    render() {
        let image;
        if(this.props.post.cardImage){
            image = <img className="headline" src={this.props.post.cardImage}/>
        }

        return (
            <Link className="headline" to={this.props.post.path}>
                <div className="headline-container shadowed-container">
                    {image}
                    <img src={this.props.post.icon} className="topic-icon" alt={this.props.post.category}/>
                    <div className='headline-text'>
                        <h1 className="topic-name">{this.props.post.category}</h1>
                        <h2 className="post-name">{this.props.post.name}</h2>
                        <p className="snipit">{this.props.post.snipit}</p>
                    </div>
                    <span className="published-date">{this.props.post.date.toDateString()}</span>
                    {this.props.icon}
                </div>
            </Link>
        )
    }
}

export default Headliner;