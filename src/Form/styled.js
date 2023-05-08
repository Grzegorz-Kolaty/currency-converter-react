import styled, { css } from "styled-components";

export const Formular = styled.form`
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.background.colorTransparent};
`;

export const Fieldset = styled.fieldset`
    ${({ theme }) => theme.spacingBoxes};
    color: ${({ theme }) => theme.font.color};
    font-weight: ${({ theme }) => theme.font.weight};
    border: ${({ theme }) => theme.border.style};
    border-radius: ${({ theme }) => theme.border.radius};
    background-color: ${({ theme }) => theme.background.colorDimmed};
    
    box-shadow: ${({ theme }) => theme.boxShadow};
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-items: center;
    margin: 0px;
`;

export const Legend = styled.legend`
    ${({ theme }) => theme.spacingElements};
    border: ${({ theme }) => theme.border.style};
    border-radius: ${({ theme }) => theme.border.radius};
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
    ${({ theme }) => theme.spacingElements};
    color: ${({ theme }) => theme.font.color};
    font-weight: ${({ theme }) => theme.font.weight};
    border: ${({ theme }) => theme.border.style};
    border-radius: ${({ theme }) => theme.border.radius};
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.background.colorMineralGreen};
    transition: 300ms;

    &:focus {
        outline: ${({ theme }) => theme.border.style};
    }

    &:hover {
        cursor: pointer;
        filter: brightness(120%);
    }

    ${({ button }) => button && css`
        background-color: ${({ theme }) => theme.background.colorTeal};

    &:active {
        background-color: ${({ theme }) => theme.background.colorTransparent};
    }

    `}
`;

