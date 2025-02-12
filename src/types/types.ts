export interface PokemonProps {
  pokemon: {
    id: number;
    name: string;
    abilities: [];
    sprites: [];
    stats: [];
    height: number;
    weight: number;
    pokemons: [];
  };
}

export interface Pokemon {
  id: number;
  name: string;
  types: { type: { url: string } }[];
}

export interface PokemonContextType {
  listPokemon: Pokemon[];
  modal: boolean;
  weakness: string[];
  details: Pokemon | null;
  handleOpenModal: (id: number) => void;
  handleCloseModal: () => void;
  handleLoadMore: () => void;
  text: string;
  setText: (text: string) => void;
  handleSearch: () => void;
  isSearching: boolean;
}

export interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    abilities: [];
    sprites: [];
    stats: [];
    height: number;
    weight: number;
    types: [];
  };

  handleOpenModal: (id: number) => void;
}

export interface LoadMoreProps {
  onClick: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  pokemon: {
    id: number;
    name: string;
    abilities: [];
    sprites: [];
    stats: [];
    height: number;
    weight: number;
    types: [];
    pokemons: [];
  };

  weakness: [];
}

export interface SearchProps {
  value: any;
  onChange: any;
  handleClick: () => void;
}
