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
		</div>
	)
}

export default ProjectCard
