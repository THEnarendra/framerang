import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TermsOfService = () => {
  return (
    <div className="mt-5 pt-2">
      <Row className="justify-content-center">
        <Col md={10}>
          <div>
            <div className="">
              <h2 className="text-center">Terms of Service</h2>
            </div>
            <div style={{backgroundColor:"transparent"}}>
              <section>
                <h3 className="mt-4">1. Introduction</h3>
                <p>
                  Welcome to our application. These Terms of Service govern your use of our service.
                  By accessing or using our service, you agree to be bound by these terms.
                </p>
              </section>
              <section>
                <h3 className="mt-4">2. User Responsibilities</h3>
                <p>
                  You are responsible for your use of the service and for any consequences thereof.
                  You agree to use the service only for purposes that are legal and in accordance
                  with these terms.
                </p>
              </section>
              <section>
                <h3 className="mt-4">3. Prohibited Activities</h3>
                <p>
                  You agree not to engage in any of the following prohibited activities:
                  (a) copying, distributing, or disclosing any part of the service in any medium;
                  (b) using any automated system to access the service.
                </p>
              </section>
              <section>
                <h3 className="mt-4">4. Termination</h3>
                <p>
                  We may terminate or suspend access to our service immediately, without prior notice
                  or liability, for any reason whatsoever, including without limitation if you breach the terms.
                </p>
              </section>
              <section>
                <h3 className="mt-4">5. Contact Us</h3>
                <p>
                  If you have any questions about these Terms, please contact us at support@example.com.
                </p>
              </section>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TermsOfService;
