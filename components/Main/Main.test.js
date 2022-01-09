import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it("renders without crashing", () => {
    const div = document.createElement('div')
    ReactDOM.render(<Main />, div)
})

it('renders children', () => {
    const {getByTestId} = render(<Main>Hello</Main>)
    expect(getByTestId('main')).toHaveTextContent('Hello')
})

it('has the right css by default', () => {
    const {getByTestId} = render(<Main />)
    const element = getByTestId('main')
    const styles = window.getComputedStyle(element)
    expect(styles.display).toBe('flex')
    expect(styles.height).toBe('100vh')
})