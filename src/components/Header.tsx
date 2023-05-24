import Image from 'next/image'

type Props = {
	data: any
}

const Header = ({ data }: Props) => {
	return (
		<header>
			<div className=''>
				<nav>3 Links</nav>
				<h1>{data.name}</h1>
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
