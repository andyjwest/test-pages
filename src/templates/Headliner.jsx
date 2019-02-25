import React, {Component} from 'react';
import {Link} from 'gatsby';


class Headliner extends Component {

    render() {
        let post = this.props.post;
        return (

            <div className="headline-container shadowed-container">
                <Link className="headline" to={`/${post.category}/${post.path}/`}>
                    <img className="headline" src={post.cardImage} alt="post.name"/>
                </Link>
                <img className="topic-icon" src={post.icon} alt={post.categoryTitle}/>
                <div className='headline-text'>
                    <h1 className="topic-name">{post.categoryTitle}</h1>
                    <Link className="headline" to={`/${post.category}/${post.path}/`}>
                        <h2 className="post-name">{post.name}</h2>
                    </Link>
                    <p className="snipit">{post.snipit} <Link className="headline"
                                                              to={`/${post.category}/${post.path}/`}>Read More</Link>
                    </p>
                </div>
                <span className="published-date">{new Date(post.date).toDateString()}</span>
                {this.props.icon}
            </div>
        )
    }
}

export default Headliner;
