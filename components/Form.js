import { useState } from 'react'
import styled from 'styled-components'

export default function Form({ formData }) {
    const [isComplete, setIsComplete] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [occupation, setOccupation] = useState('');
    const [state, setState] = useState('');

    console.log(state);

    function handleFormSubmit() {
        console.log('Pizza dude');
    }

    return (
        <FormStyled>
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
                <button id="formSubmit">Create User</button>
            </div>
        </FormStyled>
    )
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
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
        width: 100%;
        border: none;
        background-color: #0d9488;
        color: #FFFFFF;
        letter-spacing: 0.025rem;
        font-weight: 500;
        padding: 0.75rem;
        border-radius: 0.25rem;
        transition: all 0.15s ease;
        cursor: pointer;
        :hover {
            background-color: #115e59;
        }
    }
`