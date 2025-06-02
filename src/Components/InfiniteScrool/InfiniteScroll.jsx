import React, { useState, useEffect, useRef, useCallback } from 'react';
import './InfiniteScroll.css';

const InfiniteScroll = () => {
  const allProducts = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    image: `https://via.placeholder.com/200x200.png?text=Product+${i + 1}`,
    price: Math.floor(Math.random() * 900 + 100),
  }));

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  // Load products
  const loadMore = useCallback(() => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const newItems = allProducts.slice(start, end);
      setProducts(prev => [...prev, ...newItems]);
      setPage(prev => prev + 1);
      setLoading(false);
    }, 600);
  }, [page, loading]);

  useEffect(() => {
    loadMore();
  }, []);

 
  const lastItemRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, loadMore]);

  return (
    <div className="product-scroll-container">
      <h2>Amazon-style Infinite Product Scroll</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div
            className="product-card"
            key={product.id}
            ref={index === products.length - 1 ? lastItemRef : null}
          >
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
      {loading && <p className="loading-text">Loading more products...</p>}
    </div>
  );
};

export default InfiniteScroll;
