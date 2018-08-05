import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './header/NavBar.jsx';
import Home from './home/Home';
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import TopicHome from "./topic/TopicHome";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topics: []
        }
    }

    componentDidMount() {
        fetch('/mock/ideal_data.json').then(
            response => {
                return response.json()
            }).then(
            array => {
                this.setState({topics: array});
            });
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar topics={this.state.topics}/>
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
                </div>

            </BrowserRouter>
        );
    }
}

export default App;
