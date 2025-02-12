import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 100%;
  padding: 13px 29px 24px 28px;
  box-shadow: 0px 10px 51px -5px rgba(183, 189, 193, 0.3);
  background-color: #ffffff;
  border-radius: 12px;
  animation: ${fadeIn} 0.3s forwards;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 0px 12px 40px -5px rgba(90, 96, 100, 0.3);
    bottom: 2px;
  }
`;

export const ImagePokemon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 200px;
  height: 200px;

  &::before {
    content: "";
    width: 165px;
    height: 165px;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
  }

  &.normal {
    &::before {
      background-color: rgba(141, 141, 141, 0.2);
    }
  }

  &.fighting {
    &::before {
      background-color: rgba(196, 77, 97, 0.2);
    }
  }

  &.flying {
    &::before {
      background-color: rgba(166, 187, 232, 0.2);
    }
  }

  &.poison {
    &::before {
      background-color: rgba(172, 106, 202, 0.2);
    }
  }

  &.ground {
    &::before {
      background-color: rgba(203, 119, 74, 0.2);
    }
  }

  &.rock {
    &::before {
      background-color: rgba(134, 203, 190, 0.2);
    }
  }

  &.bug {
    &::before {
      background-color: rgba(131, 158, 56, 0.2);
    }
  }

  &.ghost {
    &::before {
      background-color: rgba(97, 110, 183, 0.2);
    }
  }

  &.steel {
    &::before {
      background-color: rgba(101, 148, 161, 0.2);
    }
  }

  &.fire {
    &::before {
      background-color: #ffebca;
    }
  }

  &.water {
    &::before {
      background-color: #dfecf5;
    }
  }

  &.grass {
    &::before {
      background-color: #d6ebdc;
    }
  }

  &.electric {
    &::before {
      background-color: rgba(141, 141, 141, 0.2);
    }
  }

  &.psychic {
    &::before {
      background-color: rgba(235, 140, 133, 0.2);
    }
  }

  &.ice {
    &::before {
      background-color: rgba(139, 206, 193, 0.2);
    }
  }

  &.dragon {
    &::before {
      background-color: rgba(44, 106, 193, 0.2);
    }
  }

  &.dark {
    &::before {
      background-color: rgba(89, 87, 97, 0.2);
    }
  }

  &.fairy {
    &::before {
      background-color: rgba(221, 138, 220, 0.2);
    }
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 3.2rem;

  .left-desc {
    width: 100%;
    max-width: 95px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 6px;

    span {
      display: block;
      font-weight: 500;
      font-size: 13px;
      line-height: 2px;
      text-align: center;
      color: #7a7d80;
    }

    strong {
      font-family: "Montserrat";
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      color: #2f3133;
      margin-top: 6px;
    }
  }
`;
