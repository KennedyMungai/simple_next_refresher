import { projects } from '@/components/data/data'
import ProjectCard from '@/components/project-card'

type Props = {}

const MyProjects = (props: Props) => {
	return (
		<div className='flex flex-col w-11/12 content-center m-auto'>
			<h2 className='text-2xl font-bold mb-4'>My Projects</h2>
			<div className='flex flex-row flex-wrap gap-10 mt-6'>
				{projects.map((project) => {
					return <p key={project.title}>{project.title}</p>
				})}
				<p>My Project</p>
			</div>
		</div>
	)
}

export default MyProjects
