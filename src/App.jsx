import { useState } from "react";

import "./App.css";

const Search = () => {
  const [article, setArticle] = useState([]);

  async function getArticle() {
    let response = await fetch(
      ` https://fr.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${searchValue}&format=json`
    );
    let data = await response.json();
    setArticle(data);
    console.log(data);
  }
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="searchValue"
        onChange={handleInputChange}
        placeholder="Search"
      ></input>
      <button onClick={getArticle}>Search</button>
      {article[1]?.map((element, index) => {
        console.log(article[3]);
        return (
          <div key={index}>
            <a href={article[3][0]} target="_blank">
              {element}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
