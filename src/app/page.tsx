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
			<section>{aboutMeData.highlightedBody}</section>
			<section>
				<div>{aboutMeData.body2}</div>
				<div>Image</div>
			</section>
		</main>
	)
}
