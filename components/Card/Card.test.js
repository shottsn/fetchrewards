import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it("renders without crashing", () => {
    const div = document.createElement('div')
    ReactDOM.render(<Card />, div)
})

it('renders title prop', () => {
    const {getByTestId} = render(<Card title="Hello"/>)
    expect(getByTestId('card')).toHaveTextContent('Hello')
})

it('has the right css by default', () => {
    const {getByTestId} = render(<Card />)
    const element = getByTestId('card')
    const styles = window.getComputedStyle(element)
    expect(styles.width).toBe('20rem')
    expect(styles.background).toBe('rgb(255, 255, 255)')
    expect(styles.borderWidth).toBe('1px')
})