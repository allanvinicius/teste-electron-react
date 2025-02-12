import styled from "styled-components";

export const SectionListPokemon = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  @media(max-width: 600px) {
    padding-top: 20px;
  }
`;

export const GridPokemon = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  
  @media(max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
