import Image from 'next/image'
import { Github, Window } from '../../public/icons'

interface ILink {
	text: string
	url: string
}

type Props = {
	image: string
	description: string
	tech_stack: string
	title: string
	links: ILink[]
}

const ProjectCard = ({
	image,
	description,
	tech_stack,
	title,
	links
}: Props) => {
	return (
		<div className='rounded-lg sm:w-1/3-g shadow-lg px-5 bg-grey-light w-full'>
			<Image
				aria-label={`Image of ${title} project`}
				priority={false}
				width={500}
				height={250}
				src={`/images/${image}`}
				alt={title}
				className='object-cover w-full h-48'
			/>
			<div className='p-4'>
				<h3 className='text-lg font-medium'>{title}</h3>
				<p className='text-sm mt-2 min-h-50'>{description}</p>
				<p className='text-sm mt-2 min-h-50'>{tech_stack}</p>
				<div className='flex flex-row mt-4 justify-between'>
					<a href={links[0].url} className='flex items-center'>
						<Github className={'icons_contactme'} />
						<span className='text-black'>{links[0].text}</span>
					</a>
					<a href={links[1].url} className='flex items-center'>
						<Window className={'icons_contactme'} />
						<span className='text-black'>{links[1].text}</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
