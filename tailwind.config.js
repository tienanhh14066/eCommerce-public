/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// C-1
				'C1-A': '#151515',
				'C1-B': '#575757',
				'C1-C': '#A9A9A9',
				'C1-D': '#D1D1D1',
				'C1-E': '#EBEBEB',
				'C1-F': '#F5F5F5',
				'C1-H': '#F9F9F9',
				// C-2
				'C2-A': '#6A983C',
				'C2-B': '#46760A',
				'C2-C': '#92C064',
				'C2-D': '#C8DEB3',
				'C2-E': '#F4F8EC',
				// C-3
				'C3-A': '#D0A866',
				'C3-B': '#B28A48',
				'C3-C': '#ECD2A6',
				'C3-D': '#FAEDD8',
				'C3-E': '#FFF9F0',
				// C-4
				'C4-A': '#E5704B',
				'C4-B': '#C7522D',
				'C4-C': '#EB8D70',
				'C4-D': '#F7C6B7',
				'C4-E': '#FFF1ED',
				// C-5
				'C5-A': '#37D0D6',
				'C5-B': '#19B2B8',
				'C5-C': '#7CD0D3',
				'C5-D': '#B9E6E8',
				'C5-E': '#ECF6F6',
			},
		},
	},
	plugins: [],
}
