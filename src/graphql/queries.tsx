import { gql } from "@apollo/client";

export const GET_POKEMON_FIRST_GENERATION = gql`
  query samplePokeAPIquery($limit: Int!, $offset: Int!, $searchInput: String!) {
    pokemon_gen1: pokemon_v2_pokemonspecies(
      where: {
        pokemon_v2_generation: { name: { _eq: "generation-i" } }
        name: { _regex: $searchInput }
      }
      order_by: { id: asc }
      limit: $limit
      offset: $offset
    ) {
      name
      id
    }
  }
`;

export const GET_COUNT_POKEMON = gql`
  query getCountPokemon($searchInput: String!) {
    pokemon_v2_pokemonspecies_aggregate(
      where: {
        pokemon_v2_generation: { name: { _eq: "generation-i" } }
        name: { _regex: $searchInput }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_POKEMON_DETAILS_BY_ID = gql`
  query pokemon_v2_pokemon_by_pk($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      name
      id
      weight
      height
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonstats {
        pokemon_v2_stat {
          name
        }
        base_stat
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;
