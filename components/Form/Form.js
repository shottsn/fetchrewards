// Hello reviewers. With more time, I would split several of the elements in here into unique components. Obvious components would be inputs, selects, and buttons, errors, and successes.
// I like using CSS variables throughout my styles, but didn't in this project because it was a small project and I spared my time a bit.

import { useState, useEffect } from 'react'
import { FormStyled } from './FormStyles'

export default function Form({ formData }) {
    const [isComplete, setIsComplete] = useState(false)
    const [isSubmittable, setIsSubmittable] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    // Form Fields
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [occupation, setOccupation] = useState('')
    const [state, setState] = useState('')

    useEffect(()=>{ // Checks whether the form is submittable to enable and disabled the Create User button and permit or prevent sending the POST request to the API on submit.
        (fullName && email && password && occupation && occupation !== "none" && state && state !== "none") ?
            setIsSubmittable(true) : setIsSubmittable(false)
    }, [fullName, email, password, occupation, state])

    function handleFormSubmit(e) {
        e.preventDefault()

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
                        if (response.status === 200) {
                            setIsComplete(true)
                            setError(null)
                            setIsLoading(false)
                        }
                    },
                    (error) => {
                        setIsComplete(false)
                        setError(`Error creating user. Please try again.`)
                        setIsLoading(false)
                        console.error(error)
                    }
                );
        }
    }

    return (
        <FormStyled data-testid="form">
            {error ? <p className="form-error">{error}</p> : ''}
            {isComplete ? 
                <p className="form-success">User successfully created! Thank you!</p> : 
                <>
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
                </>
            }

        </FormStyled>
    )
}