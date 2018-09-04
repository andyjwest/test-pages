import React, {Component} from 'react';
import NavBar from './navbar/NavBar.jsx';
import Home from './home/Home';
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import {Post} from './posts/Post';
import beBetter from "./posts/be-a-better-info.json";
import brewBits from "./posts/brew-bits-info.json";
import hotfix from "./posts/hotfix-info.json";
import demi from "./posts/demi-info.json";
import { faWrench, faFill, faCogs, faPray } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faPray, faCogs, faFill, faWrench, fab);

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            categories: [beBetter, brewBits, hotfix, demi]
        }
    }
    renderPost(match){
        let category = this.state.categories.find(category => category.path === ('/' + match.params.categoryPath));
        if(category){
            let post = category.posts.find(post => post.path === ('/' + match.params.postPath));
            return <Post post={{
                url: category.url + post.url
            }}/>

        }else{
            //TODO make an error page
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' render={({match})=>
                        <Home categories={this.state.categories}/>
                    }/>
                    <Route exact path='/:categoryPath/:postPath' render={({match}) =>
                        this.renderPost(match)
                    }/>
                    <NavBar />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
