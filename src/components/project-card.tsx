import Image from 'next/image'

type Props = {
	image: string
	description: string
	tech_stack: string
	title: string
}

const ProjectCard = ({ image, description, tech_stack, title }: Props) => {
	return (
		<div>
			<Image
				aria-label={}
				priority={false}
				width={500}
				height={250}
				src={image}
				alt={title}
				className=''
			/>
			<div>
				<h3 className='text-lg font-medium'>{title}</h3>
				<p className='text-sm mt-2 min-h-50'>{description}</p>
				<p className='text-sm mt-2 min-h-50'>{tech_stack}</p>
				<div className='flex flex-row mt-4 justify-between'>
					<a href={} className='flex items-center'>
						{/* Github Icon */}
						<span className='text-black'>Source Code</span>
					</a>
					<a href={} className='flex items-center'>
						{/* Website Icon */}
						<span className='text-black'>Source Code</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
