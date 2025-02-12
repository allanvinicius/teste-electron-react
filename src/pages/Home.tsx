import { ListPokemon } from "../components/ListPokemon";
import { SearchPokemon } from "../components/SearchPokemon";

export function Home() {
  return (
    <>
      <SearchPokemon />
      <ListPokemon />
    </>
  );
}
