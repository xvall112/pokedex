import React, { useContext } from "react";
import style from "./searchBox.module.scss";
import { AppContext } from "../../context/AppContext";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  const { setInputHandler, input }: any = useContext(AppContext);
  return (
    <div className={style.container}>
      <div className={style.searchBox}>
        <AiOutlineSearch className={style.icon} />
        <input
          placeholder="Zadejte jméno pokémona"
          type="search"
          id="name"
          name="search"
          onChange={setInputHandler}
          value={input}
        />
      </div>
    </div>
  );
};

export default SearchInput;
