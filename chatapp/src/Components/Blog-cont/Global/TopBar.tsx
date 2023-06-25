import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useAppSelector } from "../../../Hooks/StoreHook";
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";

interface Item {
  id: number;
  name: string;
}

interface Props {
  data: Item[];
}

const SearchBar: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");

  const { user } = useAppSelector((state) => state.auth);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="search-bar">
        <div className="head">
          <Link to="/" className="search-logo">
            <h1>Z-chat</h1>
          </Link>
        </div>
        <div className="search-cont">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search chatter"
              value={query}
              onChange={handleSearch}
              className="search-bd"
            />
            <BsSearch className="search-icon" />
          </div>
        </div>
        <div className="alarm-cont">
          <IoMdNotificationsOutline className="alarm-icon" />
          {user ? (
            <Link to="/profile">
              {user?.photoUrl ? (
                <img src={user?.photoUrl} alt="" />
              ) : (
                <div>{user?.email[0].toUpperCase()}</div>
              )}
            </Link>
          ) : (
            <></>
          )}
        </div>
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      {/* mobile */}
      <div className="search-bar-mob">
        <div className="head">
          <div className="back-cont">
            <HiMenuAlt2 className="back" onClick={() => setOpen(!open)} />
          </div>
        </div>
        <div className="search-cont">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search chatter"
              value={query}
              onChange={handleSearch}
              className="search-bd-mob"
            />
            <BsSearch className="search-icon-mob" />
          </div>
        </div>
        <div className="alarm-cont">
          <IoMdNotificationsOutline className="alarm-icon" />
          {user ? (
            <Link to="/profile">
              {user?.photoUrl ? (
                <img src={user?.photoUrl} alt="" />
              ) : (
                <div>{user?.email[0].toUpperCase()}</div>
              )}
            </Link>
          ) : (
            <></>
          )}
        </div>
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
