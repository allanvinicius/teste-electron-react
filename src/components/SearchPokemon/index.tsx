import { Search } from "./search";
import { usePokemon } from "../../hooks/usePokemon";

export function SearchPokemon() {
  const { text, setText, handleSearch } = usePokemon();

  return (
    <Search
      value={text}
      onChange={(item: string) => setText(item)}
      handleClick={handleSearch}
    />
  );
}
