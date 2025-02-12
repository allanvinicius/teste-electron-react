import { createContext } from "react";
import { PokemonContextType } from "../types/types";

export const PokemonContext = createContext<PokemonContextType | undefined>(
  undefined
);
