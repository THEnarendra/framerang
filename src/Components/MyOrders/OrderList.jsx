import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './OrderList.css';

const OrderList = () => {
  const [step, setStep] = useState('ENTER_MOBILE'); // ENTER_MOBILE → VERIFY_OTP → SHOW_ORDERS
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [token, setToken] = useState('');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(300); // 5 minutes in seconds
  const navigate = useNavigate();

  // Handle mobile number submission
  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const { data } = await axios.post('/api/orders/request-access', { 
        contactNumber: mobile 
      });
      
      setToken(data.token);
      setStep('VERIFY_OTP');
      startCountdown();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP verification
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const { data } = await axios.post('/api/orders/verify-otp', { 
        token, 
        otp 
      });
      
      setOrders(data.orders);
      setStep('SHOW_ORDERS');
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // Countdown timer for OTP expiry
  const startCountdown = () => {
    setCountdown(300); // Reset to 5 minutes
    const timer = setInterval(() => {
      setCountdown(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  };

  // Format time (MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Resend OTP
  const handleResendOtp = async () => {
    setLoading(true);
    setError('');
    
    try {
      await axios.post('/api/orders/resend-otp', { token });
      startCountdown();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to resend OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="order-list-container">
      {/* Step 1: Enter Mobile Number */}
      {step === 'ENTER_MOBILE' && (
        <div className="auth-step">
          <h2>View Your Orders</h2>
          <p>Enter your registered mobile number to receive OTP</p>
          
          <form onSubmit={handleMobileSubmit}>
            <div className="input-group">
              <span className="prefix">+91</span>
              <input
                type="tel"
                placeholder="9876543210"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                maxLength={10}
                required
              />
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <button 
              type="submit" 
              disabled={loading || mobile.length !== 10}
              className="primary-btn"
            >
              {loading ? 'Sending OTP...' : 'Get OTP'}
            </button>
          </form>
        </div>
      )}

      {/* Step 2: Verify OTP */}
      {step === 'VERIFY_OTP' && (
        <div className="auth-step">
          <h2>Verify OTP</h2>
          <p>Enter the 4-digit OTP sent to ******{mobile.slice(6)}</p>
          <p className="countdown">Valid for: {formatTime(countdown)}</p>
          
          <form onSubmit={handleOtpSubmit}>
            <input
              type="text"
              placeholder="1234"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
              maxLength={4}
              required
            />
            
            {error && <div className="error-message">{error}</div>}
            
            <div className="button-group">
              <button 
                type="submit" 
                disabled={loading || otp.length !== 4}
                className="primary-btn"
              >
                {loading ? 'Verifying...' : 'View Orders'}
              </button>
              
              {countdown === 0 && (
                <button 
                  type="button" 
                  onClick={handleResendOtp}
                  className="secondary-btn"
                >
                  Resend OTP
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {/* Step 3: Show Orders */}
      {step === 'SHOW_ORDERS' && (
        <div className="orders-section">
          <div className="header">
            <h2>Your Orders ({orders.length})</h2>
            <p className="mobile-info">Logged in as: ******{mobile.slice(6)}</p>
          </div>
          
          {orders.length === 0 ? (
            <div className="empty-state">
              <p>No orders found</p>
              <button 
                onClick={() => navigate('/')} 
                className="primary-btn"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="orders-grid">
              {orders.map(order => (
                <div key={order._id} className="order-card">
                  <div className="order-header">
                    <span className="order-id">Order #{order.orderId}</span>
                    <span className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>
                  
                  <div className="order-details">
                    <div className="products">
                      {order.items.slice(0, 3).map(item => (
                        <img 
                          key={item.productId} 
                          src={item.image} 
                          alt={item.name}
                          className="product-thumbnail"
                        />
                      ))}
                      {order.items.length > 3 && (
                        <div className="more-items">+{order.items.length - 3} more</div>
                      )}
                    </div>
                    
                    <div className="meta">
                      <div className="date">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </div>
                      <div className="amount">₹{order.totalAmount.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => navigate(`/orders/${order._id}`)}
                    className="view-details-btn"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderList;