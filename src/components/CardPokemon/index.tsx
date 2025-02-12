import { PokemonCardProps } from "../../types/types";
import { Button, Card, Description, ImagePokemon } from "./style";

export function CardPokemon({ pokemon, handleOpenModal }: PokemonCardProps) {
  return (
    <Card>
      <Button onClick={() => handleOpenModal(pokemon.id)}>
        <ImagePokemon className={`${pokemon.types[0].type.name}`}>
          {pokemon.sprites.other.dream_world.front_default && (
            <img
              src={
                pokemon.sprites.other.dream_world.front_default ||
                pokemon.sprites.other.home.front_default
              }
              alt="image"
              width={110}
              height={110}
            />
          )}
        </ImagePokemon>

        <Description>
          <div className="left-desc">
            <span>
              {pokemon.id < 10
                ? "#00" + pokemon.id
                : pokemon.id < 100
                ? "#0" + pokemon.id
                : "#" + pokemon.id}
            </span>

            <strong>
              {pokemon.name
                ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                : ""}
            </strong>
          </div>
        </Description>
      </Button>
    </Card>
  );
}
