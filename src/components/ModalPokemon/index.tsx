import { BoxModal } from "./style";
import close from "../../assets/close.svg";
import { ModalProps } from "../../types/types";

export function ModalPokemon({
  isOpen,
  onRequestClose,
  pokemon,
  weakness,
}: ModalProps) {
  return (
    <BoxModal isOpen={isOpen}>
      <div className="overlay"></div>

      <div className="box">
        <button onClick={onRequestClose} className="btn-close">
          <img src={close} alt="close" />
        </button>

        <div className="left">
          <div className="pokemon">
            {pokemon.sprites.other.dream_world.front_default && (
              <img
                src={
                  pokemon.sprites.other.dream_world.front_default ||
                  pokemon.sprites.home.front_default
                }
                alt="image"
                width={202}
                height={202}
              />
            )}
          </div>
        </div>

        <div className="right">
          <div className="info-pokemon">
            <h2>
              {pokemon.name
                ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                : ""}
            </h2>
            <span>
              {pokemon.id < 10
                ? "#00" + pokemon.id
                : pokemon.id < 100
                ? "#0" + pokemon.id
                : "#" + pokemon.id}
            </span>
          </div>

          <ul className="info-types">
            <li>
              <small className={`tag ${pokemon.types[0].type.name}`}>
                {pokemon.types[0].type.name.charAt(0).toUpperCase() +
                  pokemon.types[0].type.name.slice(1)}
              </small>
            </li>

            <li>
              {pokemon.types.length > 1 && (
                <small className={`tag ${pokemon.types[1].type.name}`}>
                  {pokemon.types[1].type.name.charAt(0).toUpperCase() +
                    pokemon.types[1].type.name.slice(1)}
                </small>
              )}
            </li>
          </ul>

          <ul className="info-habilidades">
            <li>
              <small>Height</small>
              <strong>{pokemon.height / 10} m</strong>
            </li>

            <li>
              <small>Weight</small>
              <strong>{pokemon.weight / 10} kg</strong>
            </li>

            <li>
              <small>Abilities</small>
              <strong>
                {pokemon.abilities[0].ability.name.charAt(0).toUpperCase() +
                  pokemon.abilities[0].ability.name.slice(1)}
              </strong>
            </li>
          </ul>

          <div className="info-fraquezas">
            <strong>Weaknesses</strong>

            <ul>
              <li>
                <small className={`tag ${weakness[0]}`}>
                  {String(weakness[0]).charAt(0).toUpperCase() +
                    String(weakness[0]).slice(1)}
                </small>
              </li>

              <li>
                {weakness.length > 1 && (
                  <small className={`tag ${weakness[1]}`}>
                    {String(weakness[1]).charAt(0).toUpperCase() +
                      String(weakness[1]).slice(1)}
                  </small>
                )}
              </li>

              <li>
                {weakness.length > 2 && (
                  <small className={`tag ${weakness[2]}`}>
                    {String(weakness[2]).charAt(0).toUpperCase() +
                      String(weakness[2]).slice(1)}
                  </small>
                )}
              </li>

              <li>
                {weakness.length > 3 && (
                  <small className={`tag ${weakness[3]}`}>
                    {String(weakness[3]).charAt(0).toUpperCase() +
                      String(weakness[3]).slice(1)}
                  </small>
                )}
              </li>

              <li>
                {weakness.length > 4 && (
                  <small className={`tag ${weakness[4]}`}>
                    {String(weakness[4]).charAt(0).toUpperCase() +
                      String(weakness[4]).slice(1)}
                  </small>
                )}
              </li>
            </ul>
          </div>

          <div className="info-stats">
            <strong>Stats</strong>

            <ul>
              <li>
                <small>{pokemon.stats[0].stat.name.toUpperCase()}</small>

                <div className="status">
                  <div
                    className="item"
                    style={{ width: `${pokemon.stats[0].base_stat}%` }}
                  ></div>

                  <ul className="separadores">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>

              <li>
                <small>
                  {pokemon.stats[1].stat.name.charAt(0).toUpperCase() +
                    pokemon.stats[1].stat.name.slice(1)}
                </small>

                <div className="status">
                  <div
                    className="item"
                    style={{ width: `${pokemon.stats[1].base_stat}%` }}
                  ></div>

                  <ul className="separadores">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>

              <li>
                <small>
                  {pokemon.stats[2].stat.name.charAt(0).toUpperCase() +
                    pokemon.stats[2].stat.name.slice(1)}
                </small>

                <div className="status">
                  <div
                    className="item"
                    style={{ width: `${pokemon.stats[2].base_stat}%` }}
                  ></div>

                  <ul className="separadores">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>

              <li>
                <small>
                  {pokemon.stats[3].stat.name.replace("special-", "Sp.")}
                </small>

                <div className="status">
                  <div
                    className="item"
                    style={{ width: `${pokemon.stats[3].base_stat}%` }}
                  ></div>

                  <ul className="separadores">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>

              <li>
                <small>
                  {pokemon.stats[4].stat.name.replace("special-", "Sp.")}
                </small>

                <div className="status">
                  <div
                    className="item"
                    style={{ width: `${pokemon.stats[4].base_stat}%` }}
                  ></div>

                  <ul className="separadores">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>

              <li>
                <small>
                  {pokemon.stats[5].stat.name.charAt(0).toUpperCase() +
                    pokemon.stats[5].stat.name.slice(1)}
                </small>

                <div className="status">
                  <div
                    className="item"
                    style={{ width: `${pokemon.stats[5].base_stat}%` }}
                  ></div>

                  <ul className="separadores">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BoxModal>
  );
}
