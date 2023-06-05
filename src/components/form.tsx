import { FormEvent } from 'react'

type Props = {
	onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const Form = ({ onSubmit }: Props) => {
	return (
		<form onSubmit={onSubmit}>
			<div>
				<label htmlFor='name'>Name</label>
				<input type='text' id='name' />
			</div>
		</form>
	)
}

export default Form
