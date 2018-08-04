import React, {Component} from 'react';
import BlogPost from './BlogPost';
import "./topic.css";

class TopicHome extends Component{
    render(){

        const posts = this.props.category.posts.map(post => <BlogPost post={post} key={post.name}/>)
        return (
            <div className="topic-headline">
                <div>

                </div>
                <h1>{this.props.category.title}</h1>
                {posts}
            </div>
        );
    }
}

export default TopicHome;