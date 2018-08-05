import React, {Component} from 'react';
import Headliner from './Headliner';
import CategoryContainer from './CategoryContainer';

class Home extends Component {

    render() {
        let topic = {};
        if(this.props.topics){
            topic = this.props.topics[0];
        }
        return (
            <div className='container'>
                <Headliner backgroundImage="./image.jpg"
                           topic={topic}
                           title={"Curabitur tortor"}
                           snipit={"Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus."}/>
                <CategoryContainer categories={this.props.topics}/>
            </div>
        )
    }
}

export default Home;