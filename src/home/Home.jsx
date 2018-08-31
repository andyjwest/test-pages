import React, {Component} from 'react';
import Headliner from './Headliner';
import {buildGithubUrl} from "../ResponseMapper";
import {getIconByCategory} from "../properties";

class Home extends Component {

    constructor(props){
        super(props);
        this.state ={
            posts: []
        }
    }

    componentDidMount(){
        let cat = this.props.categories;
        for (let i = 0; i < cat.length; i++) {
            let category = cat[i];
            for (let j = 0; j < category.posts.length; j++) {
                let post = {
                    name: category.posts[j].name,
                    path: category.path + category.posts[j].path,
                    url: category.url + category.posts[j].url,
                    headlineImage: category.posts[j].headlineImage,
                    cardImage: category.posts[j].cardImage,
                    category: category.title,
                    snipit: category.posts[j].snipit,
                    categoryIcon: getIconByCategory(category.path)
                };

                fetch(buildGithubUrl(post.url))
                    .then(response => {
                        if (!response.ok) {
                            throw Error(response.statusText);
                        }
                        return response.text();
                    })
                    .then(md => {
                        post.markdown = md;
                        this.setState({posts: this.state.posts.concat(post)})
                    })
            .catch(error => console.warn(error));
            }
        }
    }

    render() {

        let posts = [];
        for (let i = 0; i < this.state.posts.length; i++) {
            posts.push(<Headliner post={this.state.posts[i]} key={this.state.posts[i].url}/>);
        }
        return (
            <div className='content'>
                {posts}
            </div>
        )
    }
}

export default Home;