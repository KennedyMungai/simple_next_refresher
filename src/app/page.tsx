import { aboutMeData } from '@/components/data/data'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='flex flex-col items-center mb-32 p-10'>
			<section className='flex sm:flex-row sm:w-10/12 mt-10 items-center mb-6 flex-col w-full'>
				<div className='sm:w-1/3 w-full flex justify-center'>
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
				<div className='ml-20 w-2/3 sm:w-full mt-6 sm:mt-0'>
					<h2 className=''>{aboutMeData.title}</h2>
					<p className='text-base'>{aboutMeData.body}</p>
				</div>
			</section>
			<section className='bg-blue-light w-full my-8 p-10 h-full'>
				{aboutMeData.highlightedBody}
			</section>
			<section className='flex flex-col w-10/12 items-center sm:flex-row'>
				<div>
					<p className='flex flex-col w-7/12'>{aboutMeData.body2}</p>
				</div>
				<div>
					<Image
						priority={false}
						width={640}
						height={960}
						aria-label='Some Image'
						alt='Some Image'
						src='/images/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg'
						className='h-250 object-cover w-500'
					/>
				</div>
			</section>
		</main>
	)
}
