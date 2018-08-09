import React, {Component} from 'react';
import Headliner from './Headliner';
import CategoryContainer from './CategoryContainer';

class Home extends Component {

    constructor(props){
        super(props);
        this.state ={
            md: ""
        }
    }

    componentDidMount(){
        fetch("https://raw.githubusercontent.com/andyjwest/test-pages/master/public/posts/be_a_better/BaBBM.md")
            .then(response => response.text()).then(text => this.setState({
            md:text.substr(0, 750)
        }));

    }

    render() {
        let topic = {};
        if(this.props.topics){
            topic = this.props.topics[0];
        }
        return (
            <div className='container'>
                <Headliner backgroundImage="./image.jpg"
                           topic={topic} snipit={this.state.md}/>
                <CategoryContainer categories={this.props.topics}/>
            </div>
        )
    }
}

export default Home;