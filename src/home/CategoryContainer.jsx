import React, {Component} from 'react';
import CategoryCard from "./CategoryCard";

class CategoryContainer extends Component {

    render() {
        let cards;
        if(this.props.topics != null){
            cards = this.props.topics.map(card =>{
                return <CategoryCard card={card} key={card.id}/>
            });
        }

        return (
            <div className='card-columns'>
                {cards}
            </div>
        )
    }
}

export default CategoryContainer;