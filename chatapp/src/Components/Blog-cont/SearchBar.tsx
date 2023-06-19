import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useAppSelector } from "../../Hooks/StoreHook";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

interface Item {
  id: number;
  name: string;
}

interface Props {
  data: Item[];
}

const SearchBar: React.FC<Props> = ({data}) => {

  const [query, setQuery] = useState("");
  const [navCollapse, setNavCollapse] = useState(false)
  const { user } = useAppSelector((state) => state.auth);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-bar">
      <div className="head">
      <h1>Z-chat</h1>
      <AiOutlineMenu onClick={e => setNavCollapse(!navCollapse)} className="side-ham" />
      </div>
      <div className="search-cont">
        <input
          type="text"
          placeholder="Search chatter"
          value={query}
          onChange={handleSearch}
          className="search-bd"
        />
        <BsSearch className="search-icon" />
        <div className="alarm-cont">
          <IoMdNotificationsOutline className="alarm-icon" />
          {user ? ( 
          <Link to="/profile">
            {user?.photoUrl ? (
              <img src={user?.photoUrl} alt="avatar" />
            ) : (
              <div>{user?.email[0].toUpperCase()}</div>
            )}
          </Link>
         ) : (
            <></>
          ) 
        }
          
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
