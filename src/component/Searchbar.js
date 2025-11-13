import React, { useEffect, useState } from "react";
import SearchData from "../data/search.json";
const SearchBar = () => {
  const [showUser, setSHowUser] = useState();

  function debounceFunc(fn, delay) {
    let timerID;

    return function (...args) {
      clearTimeout(timerID);

      timerID = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  function SearchUser(value) {
    if (value.length === 0) {
      setSHowUser();
      return;
    }
    const updatedUser = SearchData.filter((ele) =>
      ele.name.toLowerCase().includes(value.toLowerCase())
    );

    console.log(updatedUser);
    setSHowUser(updatedUser);
  }
  const debounceSearch = debounceFunc(SearchUser, 1000);

  return (
    <>
      <h1> Search bar with debouncing</h1>

      <input
        type="text"
        placeholder="Search user...."
        className="p-8"
        name="search"
        onChange={(e) => debounceSearch(e.target.value)}
        style={{ padding: "8px", width: "440px" }}
      />

      {showUser && showUser.map((ele, i) => <p key={i}>{ele.name}</p>)}
    </>
  );
};

export default SearchBar;
