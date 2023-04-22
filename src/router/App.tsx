import React from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import CardList from "../components/CardList/CardList";
import Container from "../components/Container/Container";
import Title from "../components/Title/Title";
import Pagination from "../components/Pagination/Pagination";

function App() {
  return (
    <>
      <Container>
        <SearchBox />
      </Container>
      <Container>
        <Title />
      </Container>
      <Container>
        <CardList />
      </Container>
      <Container>
        <Pagination />
      </Container>
    </>
  );
}

export default App;
