import React, {Component} from 'react';
import BlogPost from './BlogPost';
import "./topic.css";

class TopicHome extends Component{
    render(){
        let posts;
        if(this.props.topic && this.props.topic.posts){
            posts = this.props.topic.posts.map(post => <BlogPost post={post} url={this.props.topic.url} key={post.name}/>)
        }

        return (
            <div className="topic-headline">
                <div>

                </div>
                <h1>{this.props.topic.title}</h1>
                {posts}
            </div>
        );
    }
}

export default TopicHome;