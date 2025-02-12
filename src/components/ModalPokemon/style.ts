import styled, { keyframes } from "styled-components";

interface Props {
  isOpen: boolean;
}

export const modalAnimation = keyframes`
  0%{
    transform: translateY(5rem);
  }
  100% {
    transform: translateY(0);
  }
`;

export const BoxModal = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2022;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${(props) => (props.isOpen ? "all" : "none")};

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: ${(props) => (props.isOpen ? 0.3 : 0)};
    background-color: rgba(0, 0, 0, 0.3);
  }

  .box {
    position: relative;
    background-color: #ffffff;
    box-shadow: 0px 10px 40px rgba(13, 12, 71, 0.05);
    pointer-events: ${(props) => (props.isOpen ? "all" : "none")};
    animation: ${modalAnimation} 0.3s forwards;
    border-radius: 16px;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 710px;
    height: auto;
    z-index: 2022;
    display: flex;
    align-items: flex-start;
    transition: all 0.3s ease;

    .btn-close {
      position: absolute;
      top: -4.5rem;
      right: 0;
      background-color: #ffffff;
      border-radius: 8px;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .left {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      width: 100%;
      max-width: 191px;
      height: 100%;

      .pokemon {
        position: relative;
        right: -15px;
        margin-top: 115px;
      }
    }

    .right {
      width: 100%;
      max-width: 519px;
      padding-left: 74px;
      padding-top: 35px;
      padding-right: 72px;

      .info-pokemon {
        display: flex;
        align-items: center;

        h2 {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          line-height: 34px;
          letter-spacing: -0.01em;

          color: #2f3133;
          margin-right: 8px;
        }

        span {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 2px;
          letter-spacing: -0.01em;

          color: #7a7d80;
        }
      }

      .info-types {
        display: flex;
        align-items: center;
        margin-top: 16px;

        li {
          margin-right: 0.8rem;

          &:last-child {
            margin-right: 0;
          }

          .tag {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 1.6rem;
            letter-spacing: -0.01em;
            width: 100%;
            max-width: 7.5rem;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.4rem 1.1rem;

            &.grass {
              background-color: rgba(104, 174, 40, 0.1);
              color: #68ae28;
            }

            &.poison {
              background-color: rgba(162, 52, 249, 0.1);
              color: #a234f9;
            }

            &.fire {
              background-color: rgba(233, 99, 3, 0.1);
              color: #e96303;
            }

            &.water {
              background-color: rgba(32, 121, 255, 0.1);
              color: #2079ff;
            }

            &.bug {
              background: rgba(155, 186, 72, 0.1);
              color: #9bba48;
            }

            &.ground {
              background-color: rgba(206, 128, 86, 0.1);
              color: #ce8056;
            }

            &.ghost {
              background-color: rgba(97, 110, 183, 0.1);
              color: #616eb7;
            }

            &.dark {
              background-color: rgba(89, 87, 97, 0.1);
              color: #595761;
            }

            &.ice {
              background-color: rgba(139, 206, 193, 0.1);
              color: #71baac;
            }

            &.dragon {
              background-color: rgba(44, 106, 193, 0.1);
              color: #2c6ac1;
            }

            &.normal {
              background-color: rgba(160, 162, 159, 0.1);
              color: #919191;
            }

            &.steel {
              background-color: rgba(101, 148, 161, 0.1);
              color: #6594a1;
            }

            &.electric {
              background-color: rgba(238, 217, 103, 0.1);
              color: #d5bc34;
            }

            &.fairy {
              background-color: rgba(226, 150, 225, 0.1);
              color: #e296e1;
            }

            &.psychic {
              background-color: rgba(235, 139, 133, 0.1);
              color: #eb8b85;
            }

            &.fighting {
              background-color: rgba(196, 77, 97, 0.1);
              color: #c44d61;
            }

            &.rock {
              background-color: rgba(139, 206, 193, 0.1);
              color: #84beb3;
            }

            &.flying {
              background-color: rgba(166, 187, 232, 0.1);
              color: #758cbd;
            }
          }
        }
      }

      .info-habilidades {
        display: flex;
        align-items: center;
        margin-top: 32px;

        li {
          margin-right: 4.8rem;

          &:last-child {
            margin-right: 0;
          }

          small {
            display: block;
            font-weight: 400;
            font-size: 13px;
            line-height: 1.6rem;
            letter-spacing: -0.01em;
            color: #7a7d80;
          }

          strong {
            display: block;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 1.7rem;
            letter-spacing: -0.01em;

            color: #2f3133;
            margin-top: 0.4rem;
          }
        }
      }

      .info-fraquezas {
        margin-top: 32px;

        strong {
          font-weight: 600;
          font-size: 13px;
          line-height: 1.6rem;
          letter-spacing: -0.01em;
          color: #4d5053;
        }

        ul {
          display: flex;
          align-items: center;
          margin-top: 1.6rem;

          li {
            margin-right: 10px;

            &:last-child {
              margin-right: 0;
            }

            .tag {
              font-family: "Montserrat";
              font-style: normal;
              font-weight: 600;
              font-size: 13px;
              line-height: 1.6rem;
              letter-spacing: -0.01em;
              width: 100%;
              max-width: 75px;

              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 0.4rem 1.1rem;

              &.grass {
                background-color: rgba(104, 174, 40, 0.1);
                color: #68ae28;
              }

              &.poison {
                background-color: rgba(162, 52, 249, 0.1);
                color: #a234f9;
              }

              &.fire {
                background-color: rgba(233, 99, 3, 0.1);
                color: #e96303;
              }

              &.water {
                background-color: rgba(32, 121, 255, 0.1);
                color: #2079ff;
              }

              &.bug {
                background: rgba(155, 186, 72, 0.1);
                color: #9bba48;
              }

              &.ground {
                background-color: rgba(206, 128, 86, 0.1);
                color: #ce8056;
              }

              &.ghost {
                background-color: rgba(97, 110, 183, 0.1);
                color: #616eb7;
              }

              &.dark {
                background-color: rgba(89, 87, 97, 0.1);
                color: #595761;
              }

              &.ice {
                background-color: rgba(139, 206, 193, 0.1);
                color: #71baac;
              }

              &.dragon {
                background-color: rgba(44, 106, 193, 0.1);
                color: #2c6ac1;
              }

              &.normal {
                background-color: rgba(160, 162, 159, 0.1);
                color: #919191;
              }

              &.steel {
                background-color: rgba(101, 148, 161, 0.1);
                color: #6594a1;
              }

              &.electric {
                background-color: rgba(238, 217, 103, 0.1);
                color: #d5bc34;
              }

              &.fairy {
                background-color: rgba(226, 150, 225, 0.1);
                color: #e296e1;
              }

              &.psychic {
                background-color: rgba(235, 139, 133, 0.1);
                color: #eb8b85;
              }

              &.fighting {
                background-color: rgba(196, 77, 97, 0.1);
                color: #c44d61;
              }

              &.rock {
                background-color: rgba(139, 206, 193, 0.1);
                color: #84beb3;
              }

              &.flying {
                background-color: rgba(166, 187, 232, 0.1);
                color: #758cbd;
              }
            }
          }
        }
      }

      .info-stats {
        margin-top: 32px;
        margin-bottom: 32px;

        strong {
          font-weight: 600;
          font-size: 13px;
          line-height: 16px;
          text-align: center;
          letter-spacing: -0.01em;
          color: #4d5053;
        }

        ul {
          margin-top: 16px;

          li {
            display: flex;
            align-items: center;
            gap: 13px;

            small {
              font-weight: 400;
              font-size: 12px;
              line-height: 1.5rem;
              color: #7a7d80;
              margin-right: 2.2rem;
              width: 6.4rem;
            }

            .status {
              position: relative;
              width: 100%;
              max-width: 283px;
              height: 3px;
              background-color: #eff3f6;
              overflow: hidden;

              .item {
                background-color: #c20001;
                height: 100%;
              }

              .separadores {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 0;

                li {
                  width: 4px;
                  height: 4px;
                  background-color: #ffff;
                  margin-left: 54px;
                  margin-bottom: 0;

                  &:first-child {
                    margin-left: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .box {
      max-width: 520px;
      flex-direction: column;

      .btn-close {
        top: 5px;
        right: 5px;
      }

      .left {
        max-width: 100%;
        border-radius: 16px 16px 0px 0px;

        .icone {
          position: absolute;
          top: 15px;
          margin-top: 0;
        }

        .pokemon {
          right: 0;
          top: -30px;
          max-width: 100px;
          margin: 0 auto;
          height: 100px;
        }

        &.grass {
          background-size: cover;
        }

        &.normal {
          background-size: cover;
        }

        &.fighting {
          background-size: cover;
        }

        &.flying {
          background-size: cover;
        }

        &.poison {
          background-size: cover;
        }

        &.ground {
          background-size: cover;
        }

        &.rock {
          background-size: cover;
        }

        &.bug {
          background-size: cover;
        }

        &.ghost {
          background-size: cover;
        }

        &.steel {
          background-size: cover;
        }

        &.fire {
          background-size: cover;
        }

        &.water {
          background-size: cover;
        }

        &.electric {
          background-size: cover;
        }

        &.psychic {
          background-size: cover;
        }

        &.ice {
          background-size: cover;
        }

        &.dragon {
          background-size: cover;
        }

        &.dark {
          background-size: cover;
        }

        &.fairy {
          background-size: cover;
        }
      }

      .right {
        max-width: 100%;

        .info-pokemon {
          justify-content: center;

          h2 {
            font-size: 24px;
          }

          span {
            font-size: 14px;
          }
        }

        .info-types {
          justify-content: center;
        }

        .info-habilidades {
          justify-content: center;
        }

        .info-fraquezas {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 1rem;
            row-gap: 1.6rem;
          }
        }

        .info-stats {
          strong {
            display: block;
            text-align: center;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .box {
      max-width: 440px;

      .right {
        padding-left: 34px;
        padding-right: 34px;
      }
    }
  }

  @media (max-width: 375px) {
    .box {
      max-width: 375px;

      .right {
        padding-right: 14px;
        padding-left: 14px;
      }
    }
  }
`;
