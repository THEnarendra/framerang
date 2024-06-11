import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ShippingPolicy = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <div className=" p-4 rounded">
            <h2 className="text-center mb-4">Shipping Policy</h2>
            <section>
              <h3 className="mt-4">1. Introduction</h3>
              <p>
                Welcome to our Shipping Policy page. Here you will find all the information you need about our shipping processes and policies.
              </p>
            </section>
            <section>
              <h3 className="mt-4">2. Shipping Rates</h3>
              <p>
                Shipping rates vary depending on the destination and the weight of your package. You will see the final shipping cost at checkout.
              </p>
            </section>
            <section>
              <h3 className="mt-4">3. Delivery Time</h3>
              <p>
                We aim to process and ship your order within 2-3 business days. Delivery times may vary depending on your location and the shipping method chosen at checkout.
              </p>
            </section>
            <section>
              <h3 className="mt-4">4. Tracking Your Order</h3>
              <p>
                Once your order has been shipped, you will receive an email with the tracking number. You can use this number to track your order on the carrier’s website.
              </p>
            </section>
            <section>
              <h3 className="mt-4">5. International Shipping</h3>
              <p>
                We offer international shipping to most countries. Please note that international shipments may be subject to customs duties and taxes, which are the responsibility of the recipient.
              </p>
            </section>
            <section>
              <h3 className="mt-4">6. Contact Us</h3>
              <p>
                If you have any questions about our shipping policy, please contact us at support@example.com.
              </p>
            </section>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ShippingPolicy;
