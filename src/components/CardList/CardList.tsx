import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_FIRST_GENERATION } from "../../graphql/queries";
import Card from "../Card/Card";
import "./cardList.scss";
import Container from "../../components/Container/Container";

interface Pokemon {
  id: number;
  name: string;
}

const CardList = () => {
  const { setAllPagesCount, offset, limit, input } = useContext(AppContext);
  //pagination limit per page

  //query pokemon generation-i limit, offset, search
  const { loading, data } = useQuery(GET_POKEMON_FIRST_GENERATION, {
    variables: { limit: limit, offset: offset, searchInput: input },
  });

  //loading
  if (loading)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );

  const { pokemon_gen1, generation_count } = data;

  setAllPagesCount(generation_count.aggregate.count);

  //no results
  if (pokemon_gen1.length === 0)
    return (
      <div className="notFoundContainer">
        <span className="notFound">Pokémon nenalezen</span>
      </div>
    );

  return (
    <>
      <div className="cardList">
        {pokemon_gen1 &&
          pokemon_gen1.map((pokemon: Pokemon) => {
            const { name, id } = pokemon;
            return <Card key={id} title={name} id={id} />;
          })}
      </div>
    </>
  );
};

export default CardList;
