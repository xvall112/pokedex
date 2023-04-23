import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_FIRST_GENERATION } from "../../graphql/queries";
import Card from "../Card/Card";
import styles from "./cardList.module.scss";
import Container from "../../components/Container/Container";

interface Pokemon {
  id: number;
  name: string;
}

const CardList = () => {
  const { offset, limit, input } = useContext(AppContext);

  //trim and lowercase input
  const searchInput = input.trim().toLowerCase();

  //query pokemon generation-i limit, offset, search
  const { loading, data } = useQuery(GET_POKEMON_FIRST_GENERATION, {
    variables: { limit: limit, offset: offset, searchInput: searchInput },
  });

  //loading
  if (loading)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );

  const { pokemon_gen1 } = data;
  //no results
  if (pokemon_gen1.length === 0)
    return (
      <div className={styles.notFoundContainer}>
        <span className={styles.notFound}>Pokémon nenalezen</span>
      </div>
    );

  return (
    <>
      <div className={styles.cardList}>
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
