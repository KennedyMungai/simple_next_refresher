import { projects } from '@/components/data/data'
import ProjectCard from '@/components/project-card'

type Props = {}

const MyProjects = (props: Props) => {
	return (
		<div className='flex flex-col w-11/12 content-center m-auto'>
			<h2 className='text-2xl font-bold mb-4'>My Projects</h2>
			<div className='flex flex-row flex-wrap gap-10 mt-6'>
				{projects.map((project) => {
					return (
						<ProjectCard
							image={project.image}
							description={project.body1}
							tech_stack={project.body2}
							links={project.links}
							title={project.title}
							key={project.title}
						/>
					)
				})}
				<p>My Project</p>
			</div>
		</div>
	)
}

export default MyProjects
