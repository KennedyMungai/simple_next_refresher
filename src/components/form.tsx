import { FormEvent } from 'react'

type Props = {
	onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const Form = ({ onSubmit }: Props) => {
	return (
		<form onSubmit={onSubmit}>
			<div className='mb-4'>
				<label htmlFor='name' className='font-bold mb-2'>
					Name
				</label>
				<input type='text' id='name' className='input-form' />
			</div>
		</form>
	)
}

export default Form
