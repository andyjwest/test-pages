import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './headliner.css';
import {buildGithubUrl} from '../ResponseMapper';

class Headliner extends Component {

    constructor(props){
        super(props);
        this.state = {
            md: ""
        }
    }

    componentDidMount(){
        fetch(buildGithubUrl(this.props.post.url))
            .then(res => res.text())
            .then(data =>
                this.setState({md: data}))
            .catch(error => console.warn(error));
    }

    render() {
        return (
            <Link to={"/"+ this.props.post.path}>
                <div className="headline-container">
                    <h1>{this.props.post.category}: {this.props.post.name}</h1>
                    <img className="headline" src={this.props.post.headlineImage} />
                    <div className="headline-text">
                        <ReactMarkdown source={this.state.md}/>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Headliner;