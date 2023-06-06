import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Home from './page'


describe('Home Page', () => {
	it('Should render without crashing', () => {
		render(<Home />)
	})
})