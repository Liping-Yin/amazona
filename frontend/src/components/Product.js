import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">
          <span className="price__current"> ${product.currentPrice}</span>
          {product.currentPrice < product.originalPrice && (
            <span className="price__origin">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
