import { useState } from 'react';

function ProductCard({ product, onAddToCart, cartItems }) {
  // Sepette bu ürünün olup olmadığını ve miktarını kontrol et
  const cartItem = cartItems.find(item => item.id === product.id);
  const isInCart = !!cartItem;
  const quantity = cartItem ? cartItem.quantity : 0;

  function handleAddToCart() {
    onAddToCart(product, 1);
  }

  function handleIncrement() {
    onAddToCart(product, quantity + 1);
  }

  function handleDecrement() {
    if (quantity > 1) {
      onAddToCart(product, quantity - 1);
    } else {
      onAddToCart(product, 0); // Sepetten çıkar
    }
  }

  return (
    <div className={`product-card ${isInCart ? 'selected' : ''}`}>
      <div className="product-image-container">
        <img 
          src={product.image.desktop}
          srcSet={`${product.image.mobile} 375w, ${product.image.tablet} 768w, ${product.image.desktop} 1024w`}
          sizes="(max-width: 375px) 100vw, (max-width: 768px) 50vw, 33vw"
          alt={product.name}
          className="product-image"
        />
        
        {!isInCart ? (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <img src="/src/images/icon-add-to-cart.svg" alt="Add to cart" />
            Add to Cart
          </button>
        ) : (
          <div className="quantity-control">
            <button className="quantity-btn" onClick={handleDecrement}>
              <img src="/src/images/icon-decrement-quantity.svg" alt="Decrease quantity" />
            </button>
            <span className="quantity-number">{quantity}</span>
            <button className="quantity-btn" onClick={handleIncrement}>
              <img src="/src/images/icon-increment-quantity.svg" alt="Increase quantity" />
            </button>
          </div>
        )}
      </div>
      
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default ProductCard;
