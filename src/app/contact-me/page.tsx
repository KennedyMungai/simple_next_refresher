import { contactMeText } from '../../components/data/data'

type Props = {}

const ContactMePage = (props: Props) => {
	return (
		<div className='flex flex-col'>
			<h2> CONTACT ME</h2>
			<div className='flex flex-col w-11/12 content-center m-auto'>
				<h3>{contactMeText.title}</h3>
				<p>{contactMeText.body}</p>
			</div>
		</div>
	)
}

export default ContactMePage
