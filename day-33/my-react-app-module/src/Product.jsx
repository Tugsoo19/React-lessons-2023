import React from 'react'

class Product1 extends React.Component {

    render() {
        return (
            <div className="section">
                <img src="products/image-aqua.png" className="image"></img>
                <div className="right-text">
                    <p><i class="bi bi-caret-up-fill"></i> 55</p>
                    <p className="title">Haught or Naught</p>
                    <p>High-minded or absent-minded? You decide</p>
                    <span>Submitted By: </span>
                    <img className='ui-avatar' src="products/avatars/molly.png"></img>

                </div>
            </div>

        );
    }

}

export default Product1;