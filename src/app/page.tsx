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
					<h2>{aboutMeData.title}</h2>
					<p>{aboutMeData.body}</p>
				</div>
			</section>
			<section>{aboutMeData.highlightedBody}</section>
			<section>
				<div>{aboutMeData.body2}</div>
				<div>Image</div>
			</section>
		</main>
	)
}
