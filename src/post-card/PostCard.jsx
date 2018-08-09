import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PostCard extends Component {

    render(){
        return(
            <Link to={'/' + this.props.post.id}>
                <div className="card">
                    <img className="card-image" src={this.props.backgroundImage} />
                    <div className="card-text">
                        <h1>{this.props.title}</h1>
                        {this.props.snipit}
                    </div>
                </div>
            </Link>
        )
    }
}

export default PostCard;