import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { useState } from 'react';
// import img1 from 'products/image-aqua.png'
// import img2 from 'products/image-rose.png'
// import img3 from 'products/image-steel.png'
// import img4 from 'products/image-yellow.png'



// import Product1 from './Product';
// import Product2 from './Product2';
// import Product3 from './Product3';
// import Product4 from './Product4';
// import { ProductFunc, ProductFunc2} from './ProductFunc';
import ProductFunc from './ProductFunc';
import products from './seed';
import Product1 from './Product';
// import ProductFunc3 from './ProductFunc3';
// import ProductFunc4 from './ProductFunc4';



function App() {
  const [productListA,setProductList] = useState(products)
  
  function handleProductUpvote(productID){
    console.log('upvoted', productID);
    const foundProduct = products.filter(product => {
      if(product.id == productID){
        return product
      }
    })
    // console.log(foundProduct[0].votes);
    // foundProduct[0].votes = foundProduct[0].votes + 1;
    // console.log(foundProduct[0].votes);

    /// change votes in product array
    
    console.log(products);
    const newProducts = productListA.map(product => {
      if (product.id == productID) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        })
      } else {
        return product
      }
    })
    console.log(newProducts);
    setProductList(newProducts)

  }

  const productList = products.map((product) => {
    
    return <ProductFunc
      id={product.id}
      title={product.title}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
      onVote = {handleProductUpvote}
      stars = {product.stars}
    />
  })

  // const productList2 = products.map((product)=>{
    
  //   return <Product1
  //     id={product.id}
  //     title={product.title}
  //     description={product.description}
  //     url={product.url}
  //     votes={product.votes}
  //     submitterAvatarUrl={product.submitterAvatarUrl}
  //     productImageUrl={product.productImageUrl}
  //   />
  // }
  // )

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header> */}

      <h1 className="header">Popular Products</h1>
      <div className="body">
        {productList}
        {/* {productList2} */}

        {/* <Product1 />
        <Product2 />
        <Product3 />
        <Product4 /> */}
        {/* <ProductFunc /> */}
        {/* <ProductFunc2 />
        <ProductFunc3 />
        <ProductFunc4 /> */}






        {/* <div className="section">
          <img src="products/image-aqua.png" className="image"></img>
          <div className="right-text">
            <p><i class="bi bi-caret-up-fill"></i> 55</p>
            <p className="title">Haught or Naught</p>
            <p>High-minded or absent-minded? You decide</p>
            <p>Submitted by: <i class="bi bi-person-circle"></i></p>
            
          </div>

        </div> */}
        {/* <div className="section">
          <img src="products/image-rose.png" className="image"></img>
          <div className="right-text">
            <p className="title">Yellow Pail</p>
            <p>On-demand sand castle construction expertise.</p>
          </div>

        </div>
        <div className="section">
          <img src="products/image-steel.png" className="image"></img>
          <div className="right-text">
            <p className="title">tinfoild: Tailored tinfoil hats</p>

            <p>We already have your measurements and shipping address.</p>
          </div>

        </div>
        <div className="section">
          <img src="products/image-yellow.png" className="image"></img>
          <div className="right-text">
            <p className="title">Supermajority: The Fantasy Congress League</p>

            <p>Earn points when your favorite politicians pass legislation.</p>
          </div>

        </div> */}
      </div>

    </div>

  );
}

export default App;




