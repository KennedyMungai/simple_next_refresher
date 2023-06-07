import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFOr } from '@testing-library/react'
import Form from './Form'

describe('The Contact Form Component', () => {
	it('Should submit the form and show a successful message', () => {
		render(<Form />)

		fireEvent.change(screen.getByLabelText('Name'), {
			target: {
				value: "Kijana Mang'aa"
			}
		})
        
        fireEvent.change(screen.getByLabelText('Email'), {
			target: {
				value: 'kijana@mangaa.com'
			}
		})

		fireEvent.change(screen.getByLabelText('Company'), {
			target: {
				value: "Kijana Mang'aa"
			}
		})

		fireEvent.change(screen.getByLabelText('Message'), {
			target: {
				value: 'I invite you to some work event'
			}
		})
	})
})