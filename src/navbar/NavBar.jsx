import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';
import { faFacebookSquare, faTwitterSquare, faPinterestSquare } from '@fortawesome/free-brands-svg-icons'
import SocialMediaButton from './SocialMediaButton';
import {getFacebookHref, getPintrestHref, getTwitterHref} from '../social-media-utils';

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
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <SocialMediaButton icon={faTwitterSquare} href={getTwitterHref(this.props.location, "Check out this post on DCubed!")}/>
                <SocialMediaButton icon={faFacebookSquare} href={getFacebookHref(this.props.location)}/>
                <SocialMediaButton icon={faPinterestSquare} href={getPintrestHref(this.props.location, "Check out this post on DCubed!", null)}/>
                <a className="icon" onClick={() => this.toggleHamburger()}>&#9776;</a>
            </div>
		);
	}
}

export default NavBar;