import React from 'react'

class Product4 extends React.Component {

    render() {
        return (
            <div className="section">
                <img src="products/image-yellow.png" className="image"></img>
                <div className="right-text">
                    <p><i class="bi bi-caret-up-fill"></i> 23</p>
                    <p className="title">Supermajority: The Fantasy Congress League</p>
                    <p>Earn points when your favorite politicians pass legislation.</p>
                    <span>Submitted By: </span>
                    <img className='ui-avatar' src="products/avatars/stevie.jpg"></img>

                </div>
            </div>

        );
    }

}

export default Product4;