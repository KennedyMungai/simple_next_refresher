import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home Page', () => {
	it('Should render without crashing', () => {
		render(<Home />)

		const title = screen.getByText(/Kijana Mang'aa/)

		expect(title).toBeInTheDocument()
	})
})