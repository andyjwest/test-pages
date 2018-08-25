import React, {Component} from 'react';
import NavBar from './navbar/NavBar.jsx';
import Home from './home/Home';
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import TopicHome from "./topic/TopicHome";
import posts from "./posts/info";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topics: posts
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="content">
                        <Route exact path="/" render={({match})=>
                            <Home categories={this.state.topics}/>
                        }/>
                        {this.state.topics.length > 0 && (
                            <Route exact path="/:topicPath" render={({match})=>
                                <TopicHome topic={this.state.topics.find(
                                    topic => topic.id === match.params.topicPath
                                )}/>
                            }/>
                        )}
                    </div>
                    <NavBar topics={this.state.topics}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
