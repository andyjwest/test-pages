import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';
import SocialMediaButton from './SocialMediaButton';
import {twitterLink, facebookLink} from "../properties";

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

		return (
            <div className={navClass}>
                <NavLink to="/" activeClassName="active" exact={true}>{this.props.siteName}</NavLink>
                <SocialMediaButton icon={['fab', 'twitter-square']} href={twitterLink} />
                <SocialMediaButton icon={['fab', 'facebook-square']} href={facebookLink} />
                <a className="icon" onClick={() => this.toggleHamburger()}>&#9776;</a>
            </div>
		);
	}
}

export default NavBar;