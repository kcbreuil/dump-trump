import React from 'react';
import Card from 'react-bootstrap/Card';

const QuoteCard = (apiData) => {
  return (
    <>
      <Card>
        <Card.Body>{apiData}</Card.Body>
      </Card>
    </>
  );
};

export default QuoteCard;
