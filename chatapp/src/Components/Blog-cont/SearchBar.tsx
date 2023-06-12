import React, { useState } from 'react';
import {BsSearch} from 'react-icons/bs'

interface Item {
  id: number;
  name: string;
}

interface Props {
  data: Item[];
}

const SearchBar: React.FC<Props> = ({ data }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='search-bar'>
      <input type="text" placeholder="Search chatter" value={query} onChange={handleSearch} className='search-bd' />
        <BsSearch className='search-icon'/>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;