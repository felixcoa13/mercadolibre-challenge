import React, { useState, useEffect, useContext} from 'react';
import  axios from 'axios';

export const SearchResultContext = React.createContext(); // null is the default value

export const useSearchResultContext = () => useContext(SearchResultContext);

export const SearchResultProvider = (props) => {
  const [items, setItems] = useState(null);
  const queryParams = props?.location?.search;
  const query = new URLSearchParams(queryParams);
  const q = query.get('q')
  useEffect(() => {
    fetchSearchResult();
  }, []);

  async function fetchSearchResult() {
    try {
      const content = await axios.get(`http://localhost:3000/api/items?q=${q}`);
      setItems(content.data);
    } catch (error) {
    }
  }
  return (
    <SearchResultContext.Provider value={items}>
      {props.children}
    </SearchResultContext.Provider>
  );
};
