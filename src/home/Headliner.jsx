import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../headliner.css';

class Headliner extends Component {

    render() {

        const container = "headline-container";

        return (
            <Link to={"/"+ this.props.topic.path}>
                <div className={container}>
                    <img className="headline" src={this.props.backgroundImage} />
                    <div className="headline-text">
                        <h1>{this.props.title}</h1>
                        <div className="two-columns">
                            {this.props.snipit}
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

Headliner.

export default Headliner;