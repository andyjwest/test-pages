import React, {Component} from 'react';
import ReactMarkdown from "react-markdown";
// import ShareButtons from './ShareButtons';
import Layout from '../../components/Layout';
import './post.css';

class Post extends Component {
    constructor(props){
        super(props);
        this.state ={
            markdown: []
        }
    }

    componentDidMount(){
        let post = this.props.pageContext.post;
        let path = `/static/posts/${post.category}/${post.url}`;
        fetch(path)
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
            <Layout>
                <div className="shadowed-container post">
                    <ReactMarkdown escapeHtml={false} source={this.state.markdown}/>
                </div>
            </Layout>
        )
    }
}

export default Post

