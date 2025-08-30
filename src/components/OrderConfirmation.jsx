function OrderConfirmation({ cartItems, onNewOrder }) {
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  function handleNewOrder() {
    onNewOrder();
  }

  function handleOverlayClick(e) {
    // Modal dışına tıklandığında modalı kapatmayalım
    e.stopPropagation();
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="order-confirmation-modal" onClick={(e) => e.stopPropagation()}>
        <div className="confirmation-icon">
          <img src="/images/icon-order-confirmed.svg" alt="Order confirmed" />
        </div>
        
        <h2 className="confirmation-title">Order Confirmed</h2>
        <p className="confirmation-subtitle">We hope you enjoy your food!</p>
        
        <div className="order-summary">
          <div className="order-items">
            {cartItems.map(item => (
              <div key={item.id} className="order-item">
                <img 
                  src={item.image.thumbnail} 
                  alt={item.name}
                  className="order-item-image"
                />
                <div className="order-item-info">
                  <h4 className="order-item-name">{item.name}</h4>
                  <div className="order-item-details">
                    <span className="order-item-quantity">{item.quantity}x</span>
                    <span className="order-item-price">@ ${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <div className="order-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-total-summary">
            <span>Order Total</span>
            <span className="total-amount">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        
        <button className="new-order-btn" onClick={handleNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;
