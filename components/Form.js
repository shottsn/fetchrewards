import { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function Form({ formData }) {
    const [isComplete, setIsComplete] = useState(false);
    const [isSubmittable, setIsSubmittable] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [occupation, setOccupation] = useState('');
    const [state, setState] = useState('');

    useEffect(()=>{
        (fullName && email && password && occupation && occupation !== "none" && state && state !== "none") ?
            setIsSubmittable(true) : setIsSubmittable(false);
    }, [fullName, email, password, occupation, state])

    function handleFormSubmit(e) {
        e.preventDefault();
        if (isSubmittable) {
            setIsLoading(true);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'name': fullName,
                    'email': email,
                    'password': password,
                    'occupation': occupation,
                    'state': state
                })
            }
            fetch('https://frontend-take-home.fetchrewards.com/form', requestOptions)
                .then(
                    (response) => {
                        console.log(response);
                        if (response.status === 200) {
                            setIsComplete(true);
                            setError(null);
                            setIsLoading(false);
                        }

                },
                    (error) => {
                        setIsComplete(false);
                        setError(`Error creating user. Please try again.`);
                        setIsLoading(false);
                        console.error(error);
                    }
                )
        }
    }

    return (
        <FormStyled>
            {error ? <p className="form-error">{error}</p> : ''}
            <div className="input-wrap">
                <label htmlFor="form-full-name">Full Name</label>
                <input id="form-full-name" type="text" autoComplete="name" value={fullName} onChange={e => setFullName(e.target.value)} required />
            </div>
            <div className="input-wrap">
                <label htmlFor="form-email">Email</label>
                <input id="form-email" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="input-wrap">
                <label htmlFor="form-password">Password</label>
                <input id="form-password" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <div className="input-wrap">
                <label htmlFor="form-occupation">Occupation</label>
                <select id="form-occupation" value={occupation} onChange={e => setOccupation(e.target.value)}>
                    <option value="none">Select Occupation</option>
                    {formData.occupations.map((occupation) => <option value={occupation} key={occupation}>{occupation}</option>)}
                </select>
            </div>
            <div className="input-wrap">
                <label htmlFor="form-state">State</label>
                <select id="form-state" autoComplete="address-level1" value={state} onChange={e => setState(e.target.value)}>
                    <option value="none">Select State</option>
                    {formData.states.map((state) => <option value={state.abbreviation} key={state.abbreviation}>{state.abbreviation} ({state.name})</option>)}
                </select>
            </div>
            <div className="form-footer">
                <button id="formSubmit" onClick={handleFormSubmit} disabled={!isSubmittable} title={(isSubmittable ? 'Create user' : 'Please complete all required form fields to submit.')}>
                    <span className="button-text">Create User</span>
                    {isLoading ? 
                        <span className="button-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256c0 36.59-7.83 71.34-21.77 102.8c-5.834 13.17-21.64 18.65-34.15 11.5c-10.5-5.996-15.06-18.94-10.12-29.98C457.5 314.6 464 286 464 256c0-107.7-82.26-196.5-187.2-206.1C264.8 47.84 256 37.34 256 25.36c0-14.52 12.8-25.45 27.23-23.92C411.6 15.08 512 124 512 256z"/></svg>
                        </span> 
                    : null}
                </button>
            </div>
        </FormStyled>
    )
}

const FormStyled = styled.form`
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