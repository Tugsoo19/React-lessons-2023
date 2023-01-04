import React from 'react'

class Product1 extends React.Component {

    render() {
        return (
            <div className="section">
                <img src={this.props.productImageUrl} className="image"></img>
            <div className="right-text">
                <p>∆{this.props.votes}</p>
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <span>Submitted By: </span>
                <img className='ui-avatar' src={this.props.submitterAvatarUrl}></img>

            </div>
            </div>

        );
    }

}

export default Product1;