/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors: {
			black: '#191A19',
			blue: '#557AFF',
			'blue-light': '#EFF3FF',
			grey: '#D9D9D9',
			'grey-light': '#FAFAFA',
			green: '#68F590',
			white: '#FFFFFF'
		},
		fontFamily: {
			sans: ['Georgia', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			display: ['Oswald']
		},
		extend: {}
	},
	plugins: []
}
