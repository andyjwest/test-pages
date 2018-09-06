import React, {Component} from 'react';
import ReactMarkdown from "react-markdown";
import ShareButtons from './ShareButtons';
import './post.css';

export class Post extends Component {

    constructor(props){
        super(props);
        this.state ={
            markdown: []
        }
    }

    componentDidMount(){
        fetch('/posts' + this.props.post.url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.text();
            })
            .then(md => this.setState({markdown: md}))
            .catch(error => console.warn(error));
    }

    render() {
        return (
            <div>
                <ShareButtons />
                <div className="shadowed-container post">
                    <ReactMarkdown escapeHtml={false} source={this.state.markdown}/>
                </div>
            </div>
        )
    }
}