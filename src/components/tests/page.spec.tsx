import MyProjects from '@/app/my-projects/page'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'


describe('My Projects Page', () => {
	it('should render correctly', () => {
		render(<MyProjects />)
	})
})