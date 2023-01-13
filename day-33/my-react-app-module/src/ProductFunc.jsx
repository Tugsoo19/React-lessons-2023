// function ProductFunc() {
//     return (
//         <div className="section">
//             <img src="products/image-aqua.png" className="image"></img>
//             <div className="right-text">
//                 <p><i class="bi bi-caret-up-fill"></i> 55</p>
//                 <p className="title">Haught or Naught</p>
//                 <p>High-minded or absent-minded? You decide</p>
//                 <span>Submitted By: </span>
//                 <img className='ui-avatar' src="products/avatars/molly.png"></img>

//             </div>
//         </div>
//     )
// }

// function ProductFunc2() {
//     return (
//         <div className="section">
//                 <img src="products/image-rose.png" className="image"></img>
//                 <div className="right-text">
//                     <p><i class="bi bi-caret-up-fill"></i> 44</p>
//                     <p className="title">Yellow Pail</p>
//                     <p>On-demand sand castle construction expertise.</p>
//                     <span>Submitted By: </span>
//                     <img className='ui-avatar' src="products/avatars/daniel.jpg"></img>

//                 </div>
//             </div>

//     )
// }


// export  {ProductFunc , ProductFunc2}

import products from "./seed";
import { useState } from "react";
import { Rating } from 'react-simple-star-rating'

export default function ProductFunc(props) {

    const [votes, setVotes] = useState(props.votes)
    const [stars, setStars] = useState(props.votes)

    // function downVote(props) {
    //     setStars(stars - 1)
    //     if (stars < 5) {
    //         setStars()
    //     } else {
    //         setStars(stars - 1)
    //     }

    // }

    // function handleUpVote(props) {
    //     setVotes(votes + 1)

    //     if (stars > 5) {
    //         setStars(0)
    //     } else {
    //         setStars(stars + 1)
    //     }


        // console.log("upvoted");
        // console.log(props.id);
        // let newProducts = []

        // const foundProduct = products.map(product => {
        //     if(product.id === props.id) {
        //         product.votes = product.votes + 1;
        //     }  
        //     return product    
        // }) 
        // console.log(foundProduct); 


    // }

    return (
        <div className="section">
            <img src={props.productImageUrl} className="image"></img>
            <div className="right-text">
                <a onClick={() => props.onVote(props.id)}>
                    <i class="bi bi-caret-up-fill"></i>
                </a>

                {props.votes}
                <a onClick={() => { props.downVote(props.id) }}>
                    <i class="bi bi-caret-down-fill"></i>
                </a>

            <Rating
                initialValue={props.stars}
            />

            <p>{props.title}</p>
            <p>{props.description}</p>
            <span>Submitted By: </span>

            <img className='ui-avatar' src={props.submitterAvatarUrl}></img>

        </div>
        </div >
    )
}







