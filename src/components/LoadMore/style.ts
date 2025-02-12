import styled from "styled-components";

export const ButtonLoadMore = styled.button`
  width: 100%;
  max-width: 196px;
  height: 45px;
  background-color: rgba(63, 93, 179, 0.1);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.01em;
  color: rgb(63, 93, 179);
  margin: 0 auto;
  margin-top: 60px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(63, 93, 179, 0.4);
  }
`;
