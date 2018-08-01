import React, { Component } from 'react';
import NavItem from './NavItem.jsx';
import {NavLink} from 'react-router-dom';

class NavBar extends Component{

	constructor(props){
		super(props);
		this.state = {
			activeId: null
		}
        this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick(navItemId){
        this.setState({
            "activeId":navItemId
        })
	}


	render() {
		let navItems;
		if(this.props.categories != null){
		    navItems = this.props.categories.map(category => (
                <NavItem category={category} clickHandler={this.handleItemClick} key={category.id} active={this.state.activeId === category.id}/>
        ));
        }
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			 <div className="collapse navbar-collapse container" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item">
                      <NavLink to="/" activeClassName="active" exact={true}>
                          <span className="nav-link">Home</span>
                      </NavLink>
			      </li>
                    {navItems}
			    </ul>
			  </div>
			</nav>
		);
	}
}

export default NavBar;