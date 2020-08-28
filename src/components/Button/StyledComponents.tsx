import styled from 'styled-components';
import { ButtonProps } from './Button';

const convertSize = (size: number, multiplier: number) => size * multiplier;

const ButtonWrapper = styled.button<ButtonProps>`
  width: ${(props) => (props.stat ? props.width + 'px' : props.width + 'vw')};
  height: ${(props) =>
    props.stat ? props.height + 'px' : props.height + 'vh'};
  display: flex;
  justify-content: center;
  align-items: center;
  background: #${(props) => props.background};
  border: none;
  outline: none;
  font-weight: 100;
  background: white;
  background: ${(props) =>
    'linear-gradient(270deg, #' +
    props.firstGradientColor +
    ' 0%, rgba(255, 255, 255, 0) 100%), #' +
    props.secondGradientColor};

    border: ${(props) => (props.border ? '1px solid #757575' : 'none')};
  box-shadow: ${(props) =>
    props.shadowColor ? '0px 0px 30px #' + props.shadowColor : 'none'};
  border-radius: ${(props) => props.radius + 'px'};
  color: ${(props) => props.color};

  @media (max-width: 1300px) {
    width: ${(props) =>
      props.stat
        ? props.width + 'px'
        : convertSize(props.width as number, 2) + 'vw'};
    height: ${(props) =>
      props.stat ? props.height + 'px' : props.height + 'vh'};
  }

  @media (max-width: 800px) {
    width: ${(props) =>
      props.stat
        ? props.width + 'px'
        : convertSize(props.width as number, 4) + '%'};
    height: ${(props) =>
      props.stat ? props.height + 'px' : props.height + 'vh'};

  }

  &:active {
    border: 2px solid white;
    color: ${(props) =>
      props.firstGradientColor ? '#' + props.firstGradientColor : 'black'}
    transition: 0.4s;
  }

    & > * {
        padding: 0 10px 0 10px;
    }
  transition: 0.4s;
`;

export default ButtonWrapper;
