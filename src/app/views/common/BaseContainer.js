import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BaseContainer = ({ children, align }) => {
  const alignClass = (alignProp => {
    switch (alignProp) {
      case 'top':
        return 'pt-5';
      case 'center':
        return 'vertical-center';
      default:
        return '';
    }
  })(align);

  return (
    <Container className={`h-100 ${alignClass}`}>
      <Row className="w-100 m-auto">
        <Col md="6" className="col-center">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default BaseContainer;
