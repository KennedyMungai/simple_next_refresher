import { projects } from '@/components/data/data'

type Props = {}

const MyProjects = (props: Props) => {
	return (
		<div className='flex flex-col w-11/12 content-center m-auto'>
			<h2 className='text-2xl font-bold mb-4'>My Projects</h2>
			<div className='flex flex-row flex-wrap gap-10 mt-6'>
				<p>My Project</p>
			</div>
		</div>
	)
}

export default MyProjects
