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
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			lg: '1.15rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
			'6xl': '3.5rem'
		},
		extend: {}
	},
	plugins: []
}
