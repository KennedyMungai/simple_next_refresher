import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFOr } from '@testing-library/react'
import Form from './Form'

describe('The Contact Form Component', () => {
	it('Should submit the form and show a successful message', () => {
		render(<Form />)
	})
})
