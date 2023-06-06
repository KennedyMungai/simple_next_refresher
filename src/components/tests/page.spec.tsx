import MyProjects from '@/app/my-projects/page'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('My Projects Page', () => {
	it('should render correctly', () => {
		render(<MyProjects />)

        const button = screen.getByRole('button', { name: 'Send Message' })
		expect(button).toBeInTheDocument()

		const title = screen.getByText('My Projects')
		expect(title).toBeInTheDocument()
	})
})