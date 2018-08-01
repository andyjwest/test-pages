import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './header/NavBar.jsx';
import Home from './home/Home';
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import TopicHome from "./topic/TopicHome";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        fetch('/mock/ideal_data.json').then(
            response => {
                return response.json()
            }).then(
            array => {
                this.setState({categories: array});
            });
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar categories={this.state.categories}/>

                    <Route exact path="/" render={({match})=>
                        <Home categories={this.state.categories}/>
                    }/>
                    {this.state.categories.length > 0 && (
                        <Route exact path="/:categoryPath" render={({match})=>
                            <TopicHome category={this.state.categories.find(
                                category => category.id === match.params.categoryPath
                            )}/>
                        }/>
                    )}
                </div>

            </BrowserRouter>
        );
    }
}

export default App;
