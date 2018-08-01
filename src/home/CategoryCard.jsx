import React, {Component} from 'react';

class CategoryCard extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.card.title}</h5>
                    <p className="card-text">{this.props.card.snipit}</p>
                    <a href="#" className="btn btn-primary">Read</a>
                </div>
            </div>
        )
    }
}

export default CategoryCard;