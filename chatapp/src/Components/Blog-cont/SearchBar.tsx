import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase';

interface Item {
  id: number;
  name: string;
}

interface Props {
  data: Item[];
}

const SearchBar: React.FC<Props> = ({ data }) => {
  const [query, setQuery] = useState('');

  const [user] = useAuthState(auth);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='search-bar'>
      <div className="search-cont">
        <input type="text" placeholder="Search chatter" value={query} onChange={handleSearch} className='search-bd' />
        <BsSearch className='search-icon' />
        <div className="alarm-cont">
          <IoMdNotificationsOutline className='alarm-icon' />
          {/* <img src={user?.photoURL} alt="logo" /> */}
        </div>
      </div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;