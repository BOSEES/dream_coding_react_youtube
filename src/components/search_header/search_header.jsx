import React from "react";
import styles from "./search_header.module.css";
import { useRef } from "react";

const SearchHeader = React.memo((props) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    props.onSearch(value);
  }

  const onClick = () => {
    handleSearch();
  }
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  console.log("header");

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.image} src="/pubilc/favicon.ico" alt="logo"/>
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress}/>
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.buttonImg} src="/public/favicon.ico" alt="search"/>
      </button>
    </header>
  )
});

export default SearchHeader;