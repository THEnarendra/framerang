import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../MainCss/ContactUs.css';
import logo from "../images/2.png";
import { toast, Toaster } from "react-hot-toast";
import Loader from '../Components/Loader/Loader';

const ContactUs = ({ setFooter }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFooter(false);
    return () => setFooter(true); // Cleanup function to reset footer when component unmounts
  }, [setFooter]);

  useEffect(() => {
    if (loading) {
      document.body.style.opacity = '0.5';
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.opacity = '1';
      document.body.style.pointerEvents = 'auto';
    }
  }, [loading]);

  const validation = () => {
    let error = {};
    if (!firstname) error.firstname = "! Please enter First name";
    if (!lastname) error.lastname = "! Please enter Last name";
    if (!phone) {
      error.phone = "! Please enter Phone number";
    } else if (!/^[9876]\d{9}$/.test(phone)) {
      error.phone = "! Phone number must be 10 digits and start with 9, 8, 7, or 6";
    }
    if (!email) {
      error.email = "! Please enter Email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "! Email address is invalid";
    }
    if (!query) error.query = "! Please enter your query";
    setErrors(error);
    return Object.keys(error).length === 0;
  };

  const data = {
    name: firstname + " " + lastname,
    email,
    phone,
    message: query
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/create-query`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Clear form fields
        setFirstname("");
        setLastname("");
        setPhone("");
        setEmail("");
        setQuery("");

        // Show success toast
        toast.success("Query Submitted: We will contact you shortly", {
          duration: 2000,
        });

      } catch (error) {
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    }
  };

  const phonenumer = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
    }
  };

  return (
    <>
      {loading && <div className="overlay"><Loader /></div>}
      <Toaster />
      <Row style={{ marginBottom: 150 }} className='row'>
        <Col sm={12} lg={6} className='col1 mt-4'>
          <form className="row g-3">
            <h1>Contact Us</h1>
            <img style={{ width: "150px" }} src={logo} alt="logo" />
            <p>Hey! We are Framerang – providing high-quality picture frames for you and your family. You'll find unmatched quality and service here.</p>
            <span>Office Address:</span>
            <p>Plot No. 4, Bhairav Nagar-2, Hathod Link Road, Kumawato Ki Dhani, Jaipur, Rajasthan- 302012</p>
            <div className="contact-info mt-3">
              <p><strong>Mobile:</strong> <a href="tel:+917014146550" className="contact-link">+91 7014146550</a></p>
              <p><strong>Email:</strong> <a href="mailto:framerang@gmail.com" className="contact-link">framerang@gmail.com</a></p>
            </div>
          </form>
        </Col>
        <Col sm={12} lg={6} className='col2'>
          <form className="row" onSubmit={handleSubmit}>
            <p>Please allow 1-2 business days to respond to your inquiry.</p>
            <h2>Let's connect</h2>
            <div className="col-md-6">
              <label htmlFor="inputFirstname" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="inputFirstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              {errors.firstname && <span className="error text-danger">{errors.firstname}</span>}
            </div>
            <div className="col-md-6">
              <label htmlFor="inputLastname" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              {errors.lastname && <span className="error text-danger">{errors.lastname}</span>}
            </div>
            <div className="col-md-6 mt-2">
              <label htmlFor="inputEmail" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="xyz@gmail.com"
              />
              {errors.email && <span className="error text-danger">{errors.email}</span>}
            </div>
            <div className="col-md-6 mt-2">
              <label htmlFor="inputPhone" className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="inputPhone"
                value={phone}
                onChange={(e) => phonenumer(e)}
              />
              {errors.phone && <span className="error text-danger">{errors.phone}</span>}
            </div>
            <div className="col-md-12 mt-2">
              <label htmlFor="inputQuery" className="form-label">What is your query?</label>
              <textarea
                className="form-control"
                id="inputQuery"
                rows="4"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Write your message here..."
              />
              {errors.query && <span className="error text-danger">{errors.query}</span>}
            </div>
            <div className="col-12 mt-4">
              <button
                type="submit"
                className="btn"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </>
  );
};

export default ContactUs;