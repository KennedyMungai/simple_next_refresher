import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
	return (
		<header>
			<div className=''>
				<nav>3 Links</nav>
				<h1>Kijana Mangaa</h1>
			</div>
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
