import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation';
import productsData from '../data.js';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  // Ürünleri yükle ve ID'leri ekle
  useEffect(() => {
    const productsWithIds = productsData.map((product, index) => ({
      ...product,
      id: index + 1
    }));
    setProducts(productsWithIds);
  }, []);

  // Sepete ürün ekleme veya miktar güncelleme
  function handleAddToCart(product, quantity) {
    setCartItems(prevCartItems => {
      const existingItem = prevCartItems.find(item => item.id === product.id);
      
      if (quantity === 0) {
        // Miktarı 0 ise sepetten çıkar
        return prevCartItems.filter(item => item.id !== product.id);
      }
      
      if (existingItem) {
        // Ürün sepette varsa miktarını güncelle
        return prevCartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity }
            : item
        );
      } else {
        // Ürün sepette yoksa ekle
        return [...prevCartItems, { ...product, quantity }];
      }
    });
  }

  // Sepetten ürün çıkarma
  function handleRemoveItem(productId) {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== productId));
  }

  // Sipariş onaylama
  function handleConfirmOrder() {
    setShowOrderConfirmation(true);
  }

  // Yeni sipariş başlatma
  function handleNewOrder() {
    setCartItems([]);
    setShowOrderConfirmation(false);
  }

  return (
    <div className="app">
      <h1>Desserts</h1>
      
      <div className="main-content">
        <div className="desserts-section">
          <div className="product-grid">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                cartItems={cartItems}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
        
        <Cart
          cartItems={cartItems}
          onUpdateQuantity={handleAddToCart}
          onRemoveItem={handleRemoveItem}
          onConfirmOrder={handleConfirmOrder}
        />
      </div>
      
      {showOrderConfirmation && (
        <OrderConfirmation
          cartItems={cartItems}
          onNewOrder={handleNewOrder}
        />
      )}
    </div>
  );
}

export default App;