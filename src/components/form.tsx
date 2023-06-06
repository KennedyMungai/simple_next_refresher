'use client'
import { FormEvent, useState } from 'react'

const Form = () => {
	const [name, setName] = useState('')
	const [company, setCompany] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const data = {
			name,
			company,
			email,
			message
		}

		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit} className='bg-grey-light p-4 rounded-md'>
			<div>
				<label htmlFor='name' className='label-form' placeholder='Name'>
					Name
				</label>
				<input
					type='text'
					id='name'
					className='input-form'
					placeholder='Name'
					required
					minLength={3}
					maxLength={200}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className='mb-4'>
				<label htmlFor='company' className='label-form'>
					Company
				</label>
				<input
					type='text'
					id='company'
					className='input-form'
					placeholder='Company'
					required
					minLength={3}
					maxLength={200}
					value={company}
					onChange={(e) => setCompany(e.target.value)}
				/>
			</div>
			<div className='mb-4'>
				<label htmlFor='email' className='label-form'>
					Email
				</label>
				<input
					type='text'
					id='email'
					className='input-form'
					placeholder='Email'
					required
					minLength={3}
					maxLength={200}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className='mb-4'>
				<label htmlFor='message' className='label-form'>
					Message
				</label>
				<textarea
					name='message'
					id='message'
					cols={30}
					rows={5}
					placeholder='Your Message'
					className='input-form'
					required
					minLength={3}
					maxLength={1000}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
			</div>
			<div className='flex align-items justify-center'>
				<button
					type='submit'
					className='bg-blue p-4 rounded-md text-white hover:bg-white hover:border hover:text-blue hover:border-1 hover:border-blue'
				>
					Send Message
				</button>
			</div>
		</form>
	)
}

export default Form
