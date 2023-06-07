import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFOr } from '@testing-library/react'
import Form from './Form'
import { setupServer } from 'msw-node'

describe('The Contact Form Component', () => {
	it('Should submit the form and show a successful message', async () => {
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

		fireEvent.submit(screen.getByRole('button'), {
			name: 'Send Message'
		})

		await waitFOr(() => screen.getByText('Thank you for contacting us!'))
	})
})