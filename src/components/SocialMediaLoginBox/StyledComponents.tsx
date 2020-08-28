import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  border-top: 1px solid grey;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  padding: 30px 0 30px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 80%;
    padding: 30px 0 30px 0;

    & > * {
      margin: 5px 0 5px 0;
    }
  }
`;

export default Wrapper;
