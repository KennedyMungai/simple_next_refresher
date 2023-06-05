import { contactMeText } from '../../components/data/data'

type Props = {}

const ContactMePage = (props: Props) => {
	return (
		<div className='flex flex-col'>
			<h2> CONTACT ME</h2>
			<div className='flex flex-col w-11/12 content-center m-auto bg-grey-light p-10'>
				<div>
					<h3>{contactMeText.title}</h3>
					<p>{contactMeText.body}</p>
				</div>
				<div>{/* Form */}</div>
			</div>
		</div>
	)
}

export default ContactMePage
