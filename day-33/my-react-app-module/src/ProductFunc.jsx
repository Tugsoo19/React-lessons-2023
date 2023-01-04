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


function ProductFunc(props) {
    return (
        <div className="section">
            <img src={props.productImageUrl} className="image"></img>
            <div className="right-text">
                <p><i className="bi bi-caret-up-fill"></i>{props.votes}</p>
                <p>{props.title}</p>
                <p>{props.description}</p>
                <span>Submitted By: </span>
                <img className='ui-avatar' src={props.submitterAvatarUrl}></img>

            </div>
        </div>
    )
}




export default ProductFunc