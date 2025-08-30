function Cart({ cartItems, onUpdateQuantity, onRemoveItem, onConfirmOrder }) {
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  function handleRemoveItem(productId) {
    onRemoveItem(productId);
  }

  function handleConfirmOrder() {
    if (cartItems.length > 0) {
      onConfirmOrder();
    }
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart ({itemCount})</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img 
            src="/src/images/illustration-empty-cart.svg" 
            alt="Empty cart" 
            className="empty-cart-image"
          />
          <p className="empty-cart-text">Your added items will appear here</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <div className="cart-item-details">
                    <span className="cart-item-quantity">{item.quantity}x</span>
                    <span className="cart-item-price">@ ${item.price.toFixed(2)}</span>
                    <span className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  className="remove-item-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <img src="/src/images/icon-remove-item.svg" alt="Remove item" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="order-total">
            <span>Order Total</span>
            <span className="total-amount">${totalPrice.toFixed(2)}</span>
          </div>
          
          <div className="carbon-neutral">
            <img src="/src/images/icon-carbon-neutral.svg" alt="Carbon neutral" />
            <span>This is a <strong>carbon-neutral</strong> delivery</span>
          </div>
          
          <button className="confirm-order-btn" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
