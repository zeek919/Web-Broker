import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  align-items: flex-start;

  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div``;

export const Header = styled.h1`
  display: flex;
  flex-direction: column;
`;

export const Note = styled.p``;
