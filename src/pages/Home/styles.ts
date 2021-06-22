import styled, {css} from 'styled-components';
import { shade } from 'polished';


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

  hr {
    border-top: 2px solid #333;
    border-radius: 5px;
  }
`;

export const TodoGroups = styled.div`
  margin-top: 30px;

  #doneLink {
    background: ${shade(0.1, '#1AAE9F')};
  }

  #undoneLink {
    background: ${shade(-0.3, 'slategray')};
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
