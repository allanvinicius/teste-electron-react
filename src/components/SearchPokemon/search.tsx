import { SearchProps } from "../../types/types";
import { SectionSearch } from "./style";
import btnSearch from "../../assets/btn-search.svg";

export function Search({ value, onChange, handleClick }: SearchProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <SectionSearch>
      <div className="container">
        <h2>Select your Pokémon</h2>

        <div className="search">
          <input
            type="text"
            onChange={handleChange}
            value={value}
            placeholder="Search name"
          />

          <button onClick={handleClick} disabled={!value} type="button">
            <img src={btnSearch} title="search" alt="search" />
          </button>
        </div>
      </div>
    </SectionSearch>
  );
}
