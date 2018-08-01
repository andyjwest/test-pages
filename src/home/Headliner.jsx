import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Headliner extends Component {

    render() {
        return (
            <div className='jumbotron'>
                <div className="two-columns">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.snipit}</p>
                    <Link to='/headline'>Read more</Link>
                </div>
            </div>
        )
    }
}

export default Headliner;