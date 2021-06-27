import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface PropsForm {
  hasError: boolean;
}

export const Header = styled.header`
  font-size: 38px;
  color: #dedede;
  display: flex;

  h3 {
    line-height: 56px;
    margin-top: 20px;
    flex: 10;
  }

  a {
    font-size: 24px;
    font-weight: bold;
    color: #dedede;
    padding: 24px;
    margin-top: 10px;
    padding-bottom: 0px;
    flex: 1;
    transition: transform 0.2s, background-color 0.2s;

    &:hover {
      transform: translateX(10px);
    }
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
    background: #1a552a;
    width: 110px;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    transition: transform 0.2s, background-color 0.2s;

    &:hover {
      transform: translateY(3px);
      background: ${shade(0.1, '#1a552a')};
    }

    &:active {
      background: ${shade(0.3, '#1a552a')};
    }
  }
`;

export const Todos = styled.div`
  margin-top: 30px;

  #doneLink {
    background: #2b6e35;

    &:hover {
      background: ${shade(0.1, '#2b6e35')};
    }

    &:active {
      background: ${shade(0.2, '#2b6e35')};
    }
  }

  #undoneLink {
    background: #4d4d4d;

    &:hover {
      background: ${shade(0.1, '#4d4d4d')};
    }

    &:active {
      background: ${shade(0.2, '#4d4d4d')};
    }
  }

  a {
    font-size: 24px;
    font-weight: bold;
    color: #dedede;
    border-radius: 30px 5px;
    border: none;
    width: 100%;
    height: 100px;
    padding: 24px;
    cursor: pointer;
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

    button {
      margin-left: auto;
      width: auto;
      height: auto;
      background-color: transparent;
      border-radius: 8px;
      border: none;
      padding: 1px;
      margin-right: 5px;

      :hover {
        background-color: ${shade(0.2, '#4d4d4d')};
        transform: translateX(0px);
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
