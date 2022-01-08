// This would be much more componentized with more time. For the sake of time, I kept it all in one file and in one styled component.

import styled from 'styled-components'

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    .form-error {
        margin: 0 0 1.5rem;
        padding: 0.5rem;
        background-color: #fee2e2;
        color: #991b1b;
        font-size: 0.875rem;
        font-weight: 500;
        text-align: center;

    }
    .form-success {
        margin: 0;
        padding: 0.5rem;
        background-color: #dcfce7;
        color: #166534;
        font-size: 0.875rem;
        font-weight: 500;
        text-align: center;
    }
    & .input-wrap {
        display: flex;
        flex-direction: column;
        min-width: 15rem;
    }
    & .input-wrap + .input-wrap {
        margin-top: 1.25rem;
    }
    & label {
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1;
        margin-bottom: 0.25rem;
        cursor: pointer;
    }
    & label:after {
        content: " *";
        color: red;
    }
    & input:not([type="submit"]), select {
        font-size: 0.875rem;
        line-height: 1;
        padding: 0.5rem;
        color: #000;
        width: 100%;
    }
    select {
        cursor: pointer;
    }
    & .form-footer {
        margin-top: 1rem;
        text-align: center;
    }
    & button {
        appearance: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        border: none;
        background-color: #0d9488;
        font-size: 1rem;
        line-height: 1;
        letter-spacing: 0.025rem;
        font-weight: 500;
        color: #FFFFFF;
        padding: 0.75rem;
        border-radius: 0.25rem;
        transition: all 0.15s ease;
        cursor: pointer;
        user-select: none;
        :hover {
            background-color: #115e59;
        }
        :disabled {
            pointer-events: none;
            opacity: 0.5;
            filter: saturate(0.25);
        }
        span.button-icon {
            margin-left: 0.5rem;
            height: 1rem;
        }
        svg {
            height: 1em;
            width: 1em;
            fill: #FFFFFF;
            animation: spin 0.75s linear infinite;
        }
    }
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`