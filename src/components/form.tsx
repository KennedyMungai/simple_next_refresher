import { FormEvent } from 'react'

type Props = {
	onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const Form = ({ onSubmit }: Props) => {
	return (
		<form onSubmit={onSubmit}>
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
		</form>
	)
}

export default Form
