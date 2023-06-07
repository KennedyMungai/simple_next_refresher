import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Form from './Form'

describe('My Projects Page', () => {
	it('should render correctly', () => {
		render(<Form />)

		const button = screen.getAllByRole('button', { name: 'Send Message' })
		expect(button).toBeInTheDocument()

		const title = screen.getByText('My Projects')
		expect(title).toBeInTheDocument()
	})
})
