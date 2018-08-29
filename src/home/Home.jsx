import React, {Component} from 'react';
import Headliner from './Headliner';
import {categories} from '../posts/info.js';

class Home extends Component {

    constructor(props){
        super(props);
        this.state ={
            posts: []
        }
    }

    componentDidMount(){
        let posts = [];
        let cat = categories();
        for (let i = 0; i < cat.length; i++) {
            let category = cat[i];
            for (let j = 0; j < category.posts.length; j++) {
                let post = category.posts[j];
                posts.push({
                    name: post.name,
                    path: category.path + '/' + post.path,
                    url: category.url + '/' + post.url,
                    headlineImage: post.headlineImage,
                    cardImage: post.cardImage,
                    category: category.title
                });
            }
            this.setState({posts: this.state.posts.concat(posts)})
        }
    }

    render() {

        let posts = [];
        for (let i = 0; i < this.state.posts.length; i++) {
            posts.push(<Headliner post={this.state.posts[i]} key={this.state.posts[i].url}/>);
        }
        return (
            <div className='container'>
                {posts}
            </div>
        )
    }
}

export default Home;