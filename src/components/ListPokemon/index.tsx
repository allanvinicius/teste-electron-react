import { usePokemon } from "../../hooks/usePokemon";
import { GridPokemon, SectionListPokemon } from "./style";
import { CardPokemon } from "../CardPokemon";
import { ModalPokemon } from "../ModalPokemon";
import { LoadMore } from "../LoadMore";

export function ListPokemon() {
  const {
    listPokemon,
    modal,
    weakness,
    details,
    handleOpenModal,
    handleCloseModal,
    handleLoadMore,
    isSearching,
  } = usePokemon();

  return (
    <>
      <SectionListPokemon>
        <div className="container">
          <GridPokemon>
            {listPokemon.map((pokemon) => (
              <CardPokemon
                key={pokemon.id || pokemon.name}
                pokemon={pokemon}
                handleOpenModal={handleOpenModal}
              />
            ))}
          </GridPokemon>

          {!isSearching && listPokemon.length > 0 && (
            <LoadMore onClick={handleLoadMore} />
          )}
        </div>
      </SectionListPokemon>

      {modal && details && (
        <ModalPokemon
          key={details.id}
          isOpen={modal}
          pokemon={details}
          weakness={weakness}
          onRequestClose={handleCloseModal}
        />
      )}
    </>
  );
}
