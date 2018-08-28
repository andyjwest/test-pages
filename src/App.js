import React, {Component} from 'react';
import NavBar from './navbar/NavBar.jsx';
import Home from './home/Home';
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="content">
                        <Route exact path="/" render={({match})=>
                            <Home />
                        }/>
                    </div>
                    <NavBar />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
