import styled from "styled-components";

export const SectionSearch = styled.section`
  padding-top: 120px;
  padding-bottom: 90px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.01em;
    color: #2f3133;
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 403px;
    height: 56px;
    background-color: #ffffff;
    border-radius: 122px;
    padding-right: 0.7px;
    padding-left: 25px;
    border: 1px solid gray;
    transition: border 0.3s ease;

    &:focus-within {
      border: 1px solid #3e75c3;
    }

    input {
      flex: 1;
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
      background-color: #ffffff;
      color: #a0afba;

      &::placeholder {
        color: #a0afba;
      }
    }

    button {
      width: 42px;
      height: 42px;
      background-color: rgba(225, 233, 239, 0.1);
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      &:disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    }
  }

  @media (max-width: 600px) {
    padding-top: 60px;
    padding-bottom: 40px;

    .container {
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    h2 {
      max-width: 100%;
      font-size: 28px;
      text-align: center;
    }

    .search {
      margin-top: 35px;
      max-width: 100%;
    }
  }
`;
