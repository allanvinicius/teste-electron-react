import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { Pokemon } from "../types/types";

import api from "../services/api";

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [listPokemon, setListPokemon] = useState<Pokemon[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [weakness, setWeakness] = useState<string[]>([]);
  const [details, setDetails] = useState<Pokemon | null>(null);
  const [text, setText] = useState<string>("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const limit = 9;

  useEffect(() => {
    async function fetchPokemons() {
      if (listPokemon.length > 0) return;

      setIsLoading(true);
      try {
        const response = await api.get(`/pokemon?offset=0&limit=${limit}`);

        const pokemonData = await Promise.all(
          response.data.results.map(async (item: { url: string }) => {
            const resp = await api.get(item.url);
            return resp.data;
          })
        );

        setListPokemon(pokemonData);
        setFilteredPokemon(pokemonData);
        setOffset(limit);
      } catch (error) {
        console.error("Erro ao buscar os Pokémons:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPokemons();
  }, []);

  function handleOpenModal(id: number) {
    const pokemon = listPokemon.find((poke) => poke.id === id);
    if (!pokemon) return;

    api.get(`pokemon/${id}`).then((response) => {
      const typeUrl = response.data.types[0].type.url;

      api.get(typeUrl).then((res) => {
        const damageRelations = res.data.damage_relations;
        const result = damageRelations.double_damage_from.map(
          ({ name }: { name: string }) => name
        );
        setWeakness(result);
      });
    });

    setModal(true);
    setDetails(pokemon);
  }

  function handleCloseModal() {
    setModal(false);
  }

  async function handleLoadMore() {
    if (isLoading || isSearching) return;

    setIsLoading(true);

    try {
      const response = await api.get(
        `/pokemon?offset=${offset}&limit=${limit}`
      );

      const newPokemons = await Promise.all(
        response.data.results.map(async (item: { url: string }) => {
          const resp = await api.get(item.url);

          return resp.data;
        })
      );

      setListPokemon((prev) => [...prev, ...newPokemons]);
      setOffset((prev) => prev + limit);
    } catch (error) {
      console.error("Erro ao carregar mais Pokémon:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSearch() {
    try {
      setIsSearching(true);
      const response = await api.get(`pokemon/${text.toLowerCase()}`);
      setListPokemon([response.data]);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
      setListPokemon([]);
    }
  }

  return (
    <PokemonContext.Provider
      value={{
        listPokemon,
        modal,
        weakness,
        details,
        handleOpenModal,
        handleCloseModal,
        handleLoadMore,
        text,
        setText,
        handleSearch,
        isSearching,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
