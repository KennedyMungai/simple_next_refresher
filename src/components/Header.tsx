import Image from 'next/image'
import Link from 'next/link'

type Props = {
	name: string
	pages: string[]
}

const Header = ({ name, pages }: Props) => {
	return (
		<header>
			<div className=''>
				<nav>
					{data.map((page) => (
						<Link
							aria-label={page.label}
							href={page.id}
							href={page.link}
							className=''
						>
							{page.label}
						</Link>
					))}
				</nav>
				<h1>{data.name}</h1>
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
