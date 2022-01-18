import React, { useState } from "react";

const Filter =props => {
    const [searchValue, setSearchValue] = useState("");
  
    const handleSearchInputChanges = e => {
      setSearchValue(e.target.value);
    };
  
    const resetInputField = e => {
      setSearchValue(e.target.value);
    };
  
    const callSearchFunction = e => {
      e.preventDefault();
      props.search(searchValue);
      resetInputField();
    };
  
    return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input
          onClick={callSearchFunction}
          type="submit"
          value="SEARCH"
          className="button is-primary"
        />
      </form>
    );
  };

export default Filter
