import Image from 'next/image'
import Link from 'next/link'

interface IPages {
	id: number
	label: string
	link: string
}

type Props = {
	name: string
	pages: IPages[]
}

const Header = ({ name, pages }: Props) => {
	return (
		<header>
			<div className=''>
				<nav>
					{pages.map((page) => (
						<Link key={page.id} href={page.link}></Link>
					))}
				</nav>
				<h1>{name}</h1>
			</div>
			{/* <Image
				priority
				height={400}
				width={2000}
				className=''
				src={}
				alt=''
				aria-label=''
			/> */}
		</header>
	)
}

export default Header
