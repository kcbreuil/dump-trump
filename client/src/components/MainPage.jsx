import React, { useEffect, useState } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import axios from 'axios';

const MainPage = () => {
  const [search, setSearch] = useState('');
  const [apiData, setApiData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `https://www.tronalddump.io/search/quote?query=${search}`
      );
      console.log(response.data._embedded.quotes);
      setApiData(response.data._embedded.quotes);
    };
    fetchData();
  }, [search]);

  return (
    <>
      <div className="field">
        <div
          className="control"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <input
            className="input"
            type="text"
            placeholder="Text input"
            onChange={handleSubmit}
            style={{ width: '35%' }}
          />
        </div>
      </div>
      {apiData &&
        apiData.map((quote) => {
          return <h1>{quote.value}</h1>;
        })}
    </>
  );
};

export default MainPage;
