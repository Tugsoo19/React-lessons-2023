import React from 'react'

class Product3 extends React.Component {

    render() {
        return (
            <div className="section">
                <img src="products/image-steel.png" className="image"></img>
                <div className="right-text">
                    <p className="number"><i class="bi bi-caret-up-fill"></i> 42</p>
                    <p className="title">Tinfoild: Tailored tinfoil hats</p>
                    <p>We already have your measurements and shipping address.</p>
                    <span>Submitted By: </span>
                    <img className='ui-avatar' src="products/avatars/jenny.jpg"></img>

                </div>
            </div>

        );
    }

}

export default Product3;