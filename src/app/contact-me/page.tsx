import { contactMeText } from '../../components/data/data'

type Props = {}

const ContactMePage = (props: Props) => {
	return (
		<div>
			<h2> CONTACT ME</h2>
			<div>
				<h3>{contactMeText.title}</h3>
				<p>{contactMeText.body}</p>
			</div>
		</div>
	)
}

export default ContactMePage
