import styled from 'styled-components';
import { ButtonProps } from './Button';

const convertSize = (size: number, multiplier: number) => size * multiplier;

const ButtonWrapper = styled.button<ButtonProps>`
  width: ${(props) => props.width + 'vw'};
  height: ${(props) => props.height + 'vh'};
  background: #${(props) => props.background};
  border: none;
  outline: none;
  font-weight: 100;
  color: ${(props) => (props.firstGradientColor ? 'white' : 'black')};
  background: ${(props) =>
    'linear-gradient(270deg, #' +
    props.firstGradientColor +
    ' 0%, rgba(255, 255, 255, 0) 100%), #' +
    props.secondGradientColor};

  box-shadow: ${(props) =>
    props.shadowColor ? '0px 0px 30px #' + props.shadowColor : 'none'};
  border-radius: 15px;

  @media (max-width: 1300px) {
    width: ${(props) => convertSize(props.width as number, 2) + 'vw'};
    height: ${(props) => props.height + 'vh'};
  }

  @media (max-width: 800px) {
    width: ${(props) => convertSize(props.width as number, 4) + '%'};
    height: ${(props) => props.height + 'vh'};
  }

  &:active {
    border: 2px solid white;
    color: black;
    transition: 0.4s;
  }

  transition: 0.4s;
`;
export default ButtonWrapper;
