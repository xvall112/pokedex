import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POKEMON_DETAILS_BY_ID } from "../graphql/queries";
import { MdArrowBackIosNew } from "react-icons/md";
import Container from "../components/Container/Container";
import Tabs from "../components/Tabs/Tabs";
import { AppContext } from "../context/AppContext";
import "./pokemonDetails.scss";

const PokemonDetails = () => {
  const { setFirstLetterUpperCase } = useContext(AppContext);
  const navigate = useNavigate();
  let { id } = useParams();
  const { data, loading } = useQuery(GET_POKEMON_DETAILS_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading</p>;

  const {
    pokemon_v2_pokemon_by_pk: {
      name,
      height,
      weight,
      pokemon_v2_pokemonabilities,
      pokemon_v2_pokemonstats,
      pokemon_v2_pokemontypes,
    },
  } = data;

  const nameUpper = setFirstLetterUpperCase(name);
  return (
    <>
      <Container>
        <div onClick={() => navigate(-1)} className="backButton">
          <MdArrowBackIosNew />
          <span>Zpět na přehled</span>
        </div>
      </Container>
      <Container>
        <div className="card">
          <div className="profile">
            <div className="name">{nameUpper}</div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              alt={nameUpper}
            />
          </div>
          <div>
            <Tabs
              height={height}
              weight={weight}
              abilities={pokemon_v2_pokemonabilities}
              stats={pokemon_v2_pokemonstats}
              types={pokemon_v2_pokemontypes}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PokemonDetails;
