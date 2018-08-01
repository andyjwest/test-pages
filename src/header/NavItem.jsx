import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavItem extends Component {

    render() {
        return (
            <li className={"nav-item " + (this.props.category.active ? "active" : '')}>
                <NavLink to={'/' + this.props.category.id} activeClassName="active">
                    <span className="nav-link">
                        {this.props.category.title}
                    </span>
                </NavLink>
            </li>
        );
    }
}

export default NavItem;