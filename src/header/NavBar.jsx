import React, { Component } from 'react';
import Aviator from 'aviator';
import NavItem from './NavItem.jsx';
import categories from '../data/categories.json';

class NavBar extends Component{

	constructor(props){
		super(props);
		this.state = {
			navItems: [],
			categories: categories
		}
	}

	componentDidMount() {
		this.setNavItemToActive(0);
  	}

	setNavItemToActive(navItemId){
		const categories = this.state.categories;
		var buttons = [];
		for (var i = categories.length - 1; i >= 0; i--) {
			buttons[i] = <NavItem category={categories[i]} key={categories[i].id} active={navItemId === i}/>;
		}

		this.setState({navItems: buttons});
	}

	// handleItemClick(navItemId){
	// 	const selectedCategory = categories.find(category => category.id === navItemId);
	// 	Aviator.navigate(selectedCategory.path);
	// 	this.setNavItemToActive(selectedCategory.id);
	// }


	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			 <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <a className="nav-link" onClick={()=>{Aviator.navigate("home")}}>Home <span className="sr-only">(current)</span></a>
			      </li>
			      {this.state.navItems}
			    </ul>
			  </div>
			</nav>
		);
	}
}

export default NavBar;