import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import 'isomorphic-fetch'
import { rest } from 'msw'
import { setupServer } from 'msw-node'
import Form from './Form'


const handlers = [
	rest.post('/api/contact', async (req, res, ctx) => {
		const { email } = await req.json()

		if (email === 'bad_request@response.com') {
			return res(ctx.status(400), ctx.json({ message: 'Bad Request' }))
		} else if (email === 'internal_error@response.com') {
			return res(
				ctx.status(500),
				ctx.json({ message: 'Internal Server Error' })
			)
		}

		return res(ctx.status(200), ctx.json({ message: 'Success' }))
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