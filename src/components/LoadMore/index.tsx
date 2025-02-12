import { LoadMoreProps } from "../../types/types";
import { ButtonLoadMore } from "./style";

export function LoadMore({ onClick }: LoadMoreProps) {
  return <ButtonLoadMore onClick={onClick}>Load more Pokémons</ButtonLoadMore>;
}
