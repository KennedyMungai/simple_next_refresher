import { contactMeText } from '../../components/data/data'

type Props = {}

const ContactMePage = (props: Props) => {
	return (
		<div className='flex flex-col w-11/12 content-center m-auto mb-10'>
			<h2> CONTACT ME</h2>
			<div className='flex flex-row w-11/12 content-center m-auto bg-grey-light p-10 gap-20'>
				<div className='w-1/2'>
					<h3>{contactMeText.title}</h3>
					<p>{contactMeText.body}</p>
				</div>
				<div className='w-1/2'>
					<p>Test Text</p>
				</div>
			</div>
		</div>
	)
}

export default ContactMePage
