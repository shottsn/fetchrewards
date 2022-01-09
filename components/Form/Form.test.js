import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import { getServerSideProps } from '../../pages/index'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const formData = {
    occupations: [
        'Head of Shrubbery',
        'Herald of Tomfoolery'
    ],
    states: [
        {
            abbreviation: 'AZ',
            name: 'Arizona'
        },
        {
            abbreviation: 'CA',
            name: 'California'
        }
    ]
}

it("renders with form data", async () => {
    const div = document.createElement('div')
    ReactDOM.render(<Form formData={formData} />, div)
})

/* 
It would be good to add a test and functionality to render the form 
with some sort of error when occupation and states aren't provided from the api.
However, I am limited in time on this assessment.
*/

it('has the right css by default', () => {
    const {getByTestId} = render(<Form formData={formData} />)
    const element = getByTestId('form')
    const styles = window.getComputedStyle(element)
    expect(styles.display).toBe('flex')
})