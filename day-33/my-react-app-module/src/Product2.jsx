import React from 'react'

class Product2 extends React.Component {

    render() {
        return (
            <div className="section">
                <img src="products/image-rose.png" className="image"></img>
                <div className="right-text">
                    <p><i class="bi bi-caret-up-fill"></i> 44</p>
                    <p className="title">Yellow Pail</p>
                    <p>On-demand sand castle construction expertise.</p>
                    <span>Submitted By: </span>
                    <img className='ui-avatar' src="products/avatars/daniel.jpg"></img>

                </div>
            </div>

        );
    }

}

export default Product2;