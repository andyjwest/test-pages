import React, {Component} from 'react';
import CategoryCard from "./CategoryCard";

class CategoryContainer extends Component {

    render() {
        let cards;
        if(this.props.categories != null){
            cards = this.props.categories.map(card =>{
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