import styled from 'styled-components';

export const Wrapper = styled.div`
    min-width: auto;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    width: min-width;

    & > * {
        padding: 0 5px 0 5px;
    }
`;

export const InputField = styled.input`
    border: none;
    border-bottom: 1px solid black;
    background: transparent;
    width: 300px;

    &:focus {
        outline: none;
        border-bottom: 1px solid blue;

        &::placeholder {
            opacity: 0;
            text-indent: 100%;
            transition: 0.7s ease-in-out;
        }
    }

    &::placeholder {
        color: black;
        font-size: 15px;
        font-weight: 600;
        transition: 0.3s ease-in-out;
    }

    @media (max-width: 400px) {
        width: 200px;
    }

    transition: 0.3s ease-in-out;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    transition: 0.3s ease-in-out;
`;

export const Icon = styled.img``;
