import React, {Component} from 'react';
import Aviator from 'aviator';

class NavItem extends Component{

	render() {
		return (
			<li className={"nav-item "  + (this.props.category.active ? "active" : '')}>
	        	<a className="nav-link">
	        	   {this.props.category.name}
        		</a>
	      	</li>
		);
	}
}

export default NavItem;