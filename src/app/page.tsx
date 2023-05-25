import { aboutMeData } from '@/components/data/data'

export default function Home() {
	return (
		<main>
			<section>
				<div>Image</div>
				<div>
					<h2>{aboutMeData.title}</h2>
					<p>{aboutMeData.body}</p>
				</div>
			</section>
			<section></section>
			<section>
				<div>Text</div>
				<div>Image</div>
			</section>
		</main>
	)
}
