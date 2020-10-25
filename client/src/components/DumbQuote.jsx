import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DumbQuote = () => {
  const [quote, setQuote] = useState('');
  useEffect(() => {
    const fetchQuote = async () => {
      let response = await axios.get('https://api.tronalddump.io/random/quote');
      console.log(response.data);
      setQuote(response.data);
    };
    fetchQuote();
  }, []);
  return <div>{quote.value}</div>;
};

export default DumbQuote;
