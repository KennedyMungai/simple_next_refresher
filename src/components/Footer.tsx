import { Envelope, Linkedin, Medium, Twitter } from '../../public/icons'

type Props = {}

const Footer = (props: Props) => {
	return (
		<footer className='w-full bg-white shadow-footer mt-12 py-4 fixed bottom-0'>
			<div>
				<a href={} aria-label={'Email'}>
					<Envelope className={} />
				</a>
				<a href={} aria-label={'Twitter'}>
					<Twitter className={} />
				</a>
				<a href={} aria-label={'LinkedIn'}>
					<Linkedin className={} />
				</a>
				<a href={} aria-label={'Medium'}>
					<Medium className={} />
				</a>
			</div>
		</footer>
	)
}

export default Footer
