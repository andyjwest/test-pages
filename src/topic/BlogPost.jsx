import React from 'react';
import ReactMarkdown from 'react-markdown';
import buildGithubUrl from '../GitbugUrlBuilder';

class BlogPost extends React.Component {

	constructor(props){
		super(props);
		this.state = {markdown: ''};
	}

	componentWillMount(){
		fetch(buildGithubUrl(this.props.url, this.props.post.url))
			.then(response => response.text())
			.then(text => this.setState({
				markdown: text
			}))

	}

	render(){
		return (
			<div className="post">
				<ReactMarkdown escapeHtml={false} source={this.state.markdown}/>
			</div>
		);
	}
}

export default BlogPost;