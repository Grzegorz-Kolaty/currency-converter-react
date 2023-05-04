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
        margin: "10px",
        padding: "20px"
    },

    background: {
        colorTransparent: "transparent",
        colorTeal: "hsla(181, 49%, 30%, 0.882)",
        colorTealBrighter: "hsla(181, 49%, 35%, 0.882)",
        colorBlack: "black",
        colorDimmed: "hsla(0, 0%, 0%, 0.585)"
    }
};

export const Formular = styled.form`
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.background.colorTransparent};
`;

export const Fieldset = styled.fieldset`
    color: ${({ theme }) => theme.font.color};
    font-weight: ${({ theme }) => theme.font.weight};
    border: ${({ theme }) => theme.border.style};
    border-radius: ${({ theme }) => theme.border.radius};
    padding: ${({ theme }) => theme.spacing.padding};
    margin: 0px;
    background-color: ${({ theme }) => theme.background.colorDimmed};
    box-shadow: 0px 0px 200px 50px black;
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-items: center;
`;

export const Legend = styled.legend`
    border: ${({ theme }) => theme.border.style};
    border-radius: ${({ theme }) => theme.border.radius};
    padding: ${({ theme }) => theme.spacing.padding};
    background-color: ${({ theme }) => theme.background.colorTeal};
`;

export const Label = styled.label`
    display: flex;
    flex-flow: column;
    width: 150px;
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
    padding: ${({ theme }) => theme.spacing.padding};
    margin: ${({ theme }) => theme.spacing.margin};
    box-shadow: 0px 0px 20px 3px black;
    background-color: ${({ theme }) => theme.background.colorDimmed};
    transition: 300ms;

    &:focus {
    outline: ${({ theme }) => theme.border.style};
    }

    &:hover {
    cursor: pointer;
    }

    ${({ button }) => button && css`
    background-color: ${({ theme }) => theme.background.colorTeal};

    &:hover {
    background-color: ${({ theme }) => theme.background.colorTealBrighter};
    }

    &:active {
    background-color: ${({ theme }) => theme.background.colorTransparent};
    }

    `}
`;

