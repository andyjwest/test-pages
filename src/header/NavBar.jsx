import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';

class NavBar extends Component{

	constructor(props){
		super(props);
		this.state = {
			"activeId": null,
            "responsive": false
		};
        this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick(navItemId){
        this.setState({
            "activeId":navItemId
        })
	}

    toggleHamburger() {
        if(this.state.responsive){
            this.setState({"responsive": false});
        }else{
            this.setState({"responsive": true});
        }
    }


	render() {
        let navClass;
        if(this.state.responsive){
            navClass = "nav responsive";
        }else{
            navClass = "nav";
        }

		let navItems;

        if(this.props.topics != null){
		    navItems = this.props.topics.map(topic => (
                <NavLink key={topic.id} to={topic.path} activeClassName="active">
                    {topic.title}
                </NavLink>
            ));
        }

		return (

            <div className={navClass}>
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                {navItems}
                <a className="icon" onClick={() => this.toggleHamburger()}>&#9776;</a>
            </div>
		);
	}
}

export default NavBar;