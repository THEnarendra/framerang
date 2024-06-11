import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const RefundPolicy = () => {
  return (
    <Container className="mt-5 pt-2">
      <Row className="justify-content-center">
        <Col md={10}>
          <div>
            <div className="">
              <h2 className="text-center">Refund Policy</h2>
            </div>
            <div>
              <section>
                <h3 className="mt-4">1. Introduction</h3>
                <p>
                  Thank you for shopping with us. If you are not entirely satisfied with your purchase, we're here to help.
                </p>
              </section>
              <section>
                <h3 className="mt-4">2. Returns</h3>
                <p>
                  You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.
                </p>
              </section>
              <section>
                <h3 className="mt-4">3. Refunds</h3>
                <p>
                  Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
                </p>
              </section>
              <section>
                <h3 className="mt-4">4. Shipping</h3>
                <p>
                  You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                </p>
              </section>
              <section>
                <h3 className="mt-4">5. Contact Us</h3>
                <p>
                  If you have any questions on how to return your item to us, contact us at support@example.com.
                </p>
              </section>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RefundPolicy;
