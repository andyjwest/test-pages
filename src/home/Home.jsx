import React, {Component} from 'react';
import Headliner from './Headliner';
import './home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let cat = this.props.categories;
        let posts = [];
        for (let i = 0; i < cat.length; i++) {
            let category = cat[i];
            for (let j = 0; j < category.posts.length; j++) {
                posts.push({
                    name: category.posts[j].name,
                    path: category.path + category.posts[j].path,
                    url: category.url + category.posts[j].url,
                    headlineImage: category.posts[j].headlineImage,
                    cardImage: category.posts[j].cardImage,
                    category: category.title,
                    snipit: category.posts[j].snipit,
                    icon: category.icon,
                    date: new Date(category.posts[j].publishDate)
                });
            }
            console.log(category.icon)
        }

        posts.sort(function(a, b) {
            let dateA = new Date(a.date), dateB = new Date(b.date);
            return dateB - dateA;
        });

        this.setState({posts: posts});
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