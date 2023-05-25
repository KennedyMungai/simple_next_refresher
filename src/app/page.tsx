import { aboutMeData } from '@/components/data/data'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='flex flex-col items-center'>
			<section className='flex flex-row w-10/12 mt-10 items-center mb-6'>
				<div className='w-1/3'>
					<Image
						priority={false}
						width={640}
						height={960}
						aria-label={'Portfolio Owner Image'}
						alt='Portfolio Owner Image'
						src={'/images/jurica-koletic-7YVZYZeITc8-unsplash.jpg'}
						className='profileImage'
					/>
				</div>
				<div className='ml-20 w-2/3'>
					<h2 className=''>{aboutMeData.title}</h2>
					<p className='text-base'>{aboutMeData.body}</p>
				</div>
			</section>
			<section className='bg-blue-light w-full my-8 p-10 h-full'>
				{aboutMeData.highlightedBody}
			</section>
			<section className='flex flex-row w-10/12 items-center'>
				<div>{aboutMeData.body2}</div>
				<div>Image</div>
			</section>
		</main>
	)
}
