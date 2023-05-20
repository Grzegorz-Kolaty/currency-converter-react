import styled, { css } from "styled-components";
import loading from "./loading.gif";

export const Formular = styled.form`
    ${({ theme }) => theme.spacingBoxes};
    background-color: ${({ theme }) => theme.background.colorTransparent};
    border-radius: ${({ theme }) => theme.border.radius};
    background-color: ${({ theme }) => theme.background.colorDimmed};
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    min-height: 380px;
`;

export const Error = styled(Formular)`
    ${({ theme }) => theme.spacingBoxes};
    background-color: ${({ theme }) => theme.background.colorTransparent};
    border-radius: ${({ theme }) => theme.border.radius};
    background-color: hsla(0, 61%, 20%, 0.551);
    min-height: 380px;
`

export const Loader = styled(Formular)`
    background-image: url("${loading}");
    background-repeat: no-repeat;
    background-position: center;
`;



export const Fieldset = styled.fieldset`
    ${({ theme }) => theme.spacingBoxes};
    color: ${({ theme }) => theme.font.color};
    font-weight: ${({ theme }) => theme.font.weight};
    border: ${({ theme }) => theme.border.style};
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

