import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Form from './Form'
import { setupServer } from 'msw-node'
import { rest } from 'msw'


const handlers = [
	rest.post('/api/contact', (req, res, ctx) => {
		return res(ctx.status(200))
	})
]

const server = setupServer(...handlers)

describe('The Contact Form Component', () => {
	beforeAll(() => server.listen())
	afterEach(() => server.restoreHandlers())
	afterAll(() => server.resetHandlers())

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

		await waitFor(() => screen.getByText('Thank you for contacting us!'))
	})
})