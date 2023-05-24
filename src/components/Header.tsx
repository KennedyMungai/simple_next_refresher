import Image from 'next/image'

interface IMyData {
	name: string
	title: string
	body: string
	highlightedBody: string
	body2: string
}

type Props = {
	data: IMyData
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
