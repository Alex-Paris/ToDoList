import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface PropsForm {
  hasError: boolean;
}

export const Header = styled.header`
  font-size: 38px;
  color: #dedede;

  h3 {
    line-height: 56px;
    margin-top: 20px;
  }
`;

export const Form = styled.form<PropsForm>`
  margin-top: 50px;
  margin-bottom: 10px;
  /* max-width: 700px; */

  display: flex;

  input {
    flex: 4;
    height: 48px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder {
      color: #a8a8b3;
    }
  }


  button {
    flex: 1;
    font-size: 24px;
    font-weight: bold;
    color: white;
    background: #1AAE9F;
    width: 110px;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
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



export const Todos = styled.div`
  margin-top: 30px;

  #doneLink {
    background: #1a552a;
  }

  #undoneLink {
    background: #4d4d4d;
  }

  a {
    font-size: 24px;
    font-weight: bold;
    color: #dedede;
    border-radius: 30px 5px;
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
      transform: translateX(10px);
    }

    &:active {
      background: ${shade(0.1, '#1a552a')};
    }

    div {
      margin: 0 16px;
      margin-left: auto;
      margin-top: 4px;

      p {
        font-size: 18px;
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
