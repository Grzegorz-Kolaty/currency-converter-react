import styled, { css } from "styled-components";

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
    background-color: ${({ theme }) => theme.background.colorDimmed};
    
    box-shadow: ${({ theme }) => theme.boxShadow};
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-items: center;
    margin: 0px;
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
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.background.colorMineralGreen};
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

