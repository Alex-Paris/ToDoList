import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface PropsPopUpForm {
  hasVisible:boolean;
}

export const Header = styled.header`
  font-size: 38px;
  color: #3a3a3a;

  h3 {
    line-height: 56px;
    margin-top: 20px;
  }

  button {
    font-size: 24px;
    font-weight: bold;
    color: white;
    background: #1AAE9F;
    line-height: 48px;
    width: 100%;
    border: none;
    border-radius: 5px;
    margin: 50px 0px 10px 0;
    transition: transform 0.2s, background-color 0.2s;

    &:hover {
      transform: translateY(3px);
      background: ${shade(0.1, '#1AAE9F')};
    }

    &:active {
      background: ${shade(0.3, '#1AAE9F')};
    }
  }
`;

export const PopUpForm = styled.div<PropsPopUpForm>`
  position: relative;
  width: 100%;
  color: #3a3a3a;

  h3 {
    font-size: 22px;
    margin: 10px 0 0 10px;
  }

  hr {
    width: 98%;
    position: fixed;
    left: 1%;
  }

  div {
    display: none;
    position: fixed;
    width: 600px;
    left: 50%;
    top: 30%;
    transform: translate(-50%, 5%);
    border-radius: 10px;
    z-index: 9;
    background-color: #fff;

    ${(props) => props.hasVisible && css`
      display: block;
    `}

    form {
      max-width: 600px;
      padding: 20px;

      input {
        width: 100%;
        padding: 15px;
        margin: 5px 0 0 0;
        border: none;
        background: #eee;

        &:focus {
          background-color: ${shade(0.1, '#eee')};
          outline: none;
        }
      }

      button {
        padding: 12px 20px;
        left: 100px;
        border: none;
        background-color: #1AAE9F;
        margin-top: 10px;
        color: #fff;
        width: 80px;
        opacity: 0.8;
        transition: transform 0.2s, background-color 0.2s;

        &:hover {
          transform: translateY(3px);
          background: ${shade(0.1, '#1AAE9F')};
        }

        &:active {
          background: ${shade(0.3, '#1AAE9F')};
        }
      }
    }
  }


`;

export const TodoGroups = styled.div`
  margin-top: 30px;

  #doneLink {
    background: ${shade(-0.2, '#247a44')};
  }

  #undoneLink {
    background: #b3b3b3;
  }

  a {
    font-size: 24px;
    font-weight: bold;
    color: #3a3a3a;
    border-radius: 5px;
    width: 100%;
    height: 100px;
    padding: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: transform 0.2s, background-color 0.2s;

    & + a {
      margin-top: 14px;
    }

    &:hover {
      transform: translateX(5px);
      background: ${shade(-0.1, 'slategray')};
    }

    &:active {
      background: ${shade(0.1, 'slategray')};
    }

    div {
      margin: 0 16px;
      margin-left: auto;
      margin-top: 4px;

      p {
        font-size: 18px;
        color: #3a3a3a;
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
