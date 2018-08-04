import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../headliner.css';

class Headliner extends Component {

    render() {

        const container = "headline-container";

        return (
            <div>
                <div className={container}>
                    <img className={container} src={this.props.backgroundImage} />
                    <div className="headline-text post">
                        <h1 className={container}>{this.props.title}</h1>
                        <div className="two-columns">
                            {this.props.snipit}
                            <Link to='/headline'>Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Headliner;