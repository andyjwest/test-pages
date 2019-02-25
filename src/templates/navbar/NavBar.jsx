import React, { Component } from 'react';
import {Link} from 'gatsby';
import './navbar.css';
// import SocialMediaButton from './SocialMediaButton';
// import {twitterLink} from "../properties";

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

        let category = this.props.breadCrumbs ? <Link to={this.props.breadCrumbs.id}>{this.props.breadCrumbs.title}</Link> : undefined;

		return (
            <div className={navClass}>
                <Link to="/" >Designer Dungeons</Link>
                {category}
                {/*<SocialMediaButton icon={['fab', 'twitter-square']} href={twitterLink} />*/}
                <span className="icon" onClick={() => this.toggleHamburger()}>&#9776;</span>
            </div>
		);
	}
}

export default NavBar;
