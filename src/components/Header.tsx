import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
	return (
		<header>
			<div className=''></div>
			<Image
				priority
				height={400}
				width={2000}
				className=''
				src={}
				alt=''
				aria-label=''
			/>
		</header>
	)
}

export default Header
