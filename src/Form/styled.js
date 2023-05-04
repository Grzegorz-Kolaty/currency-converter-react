import styled, { css } from "styled-components";

export const theme = {
    font: {
        color: "white",
        weight: 700
    },

    border: {
        style: "none",
        radius: "5px"
    },

    spacing: {
        margin: "0px",
        padding: "20px"
    },

    background: {
        color: "#277172e1"
    }
};

export const Formular = styled.form`
    margin-bottom: 20px;
`;

export const Fieldset = styled.fieldset`
    color: ${({ theme }) => theme.font.color};
    font-weight: ${({ theme }) => theme.font.weight};
    border: ${({ theme }) => theme.border.style};
    border-radius: ${({ theme }) => theme.border.radius};
    ${({ theme }) => theme.spacing};
    background-color: #0000006b;
    box-shadow: 0px 0px 200px 50px rgb(0, 0, 0);
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
`;

export const Legend = styled.legend`
    border: ${({ theme }) => theme.border.style};
    border-radius: ${({ theme }) => theme.border.radius};
    ${({ theme }) => theme.spacing}
    background-color: ${({ theme }) => theme.background.color};
`;

export const Label = styled.label`
    display: flex;
    flex-flow: column;
    width: 150px;
    margin: 10px;
    flex-grow: 1;

    ${({ submitter }) => submitter && css`
    min-width: 100%;
    `}
`;

export const Datafield = styled.div`
    color: ${({ theme }) => theme.font.color};
    font-weight: ${({ theme }) => theme.font.weight};
    border: ${({ theme }) => theme.border.style};
    border-radius: ${({ theme }) => theme.border.radius};
    ${({ theme }) => theme.spacing};

    box-shadow: 0px 0px 20px 3px black;
    background-color: rgba(0, 0, 0, 0.647);
    transition: 300ms;

    ${({ button }) => button && css`
    background-color: #277172e1;


    &:hover {
    background-color: hsla(181, 49%, 40%, 0.882),
    cursor: pointer;
    }

    &:active {
    background-color: transparent;
    }

    `}
`;

