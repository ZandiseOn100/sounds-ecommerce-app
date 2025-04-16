import React from 'react';
import IMAGES from "../images/IMAGES.js";

const products = [
  { id: 1, name: 'On Budget Black Speakers', price: 550, image: IMAGES.image1 },
  { id: 2, name: 'Baller Speakers', price: 935, image: IMAGES.image2 },
  { id: 3, name: 'For Producers Speakers', price: 845, image: IMAGES.image3 },
];

function Shop({ addToCart }) {
  return (
    <div className="container">
      <h1>Shop</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.name} className="w-full h-auto product-card-shop" />
            <h2>{product.name}</h2>
            <p>R{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
