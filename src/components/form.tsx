'use client'
import { FormEvent } from 'react'

const Form = () => {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
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
