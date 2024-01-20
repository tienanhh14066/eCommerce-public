// prettier.config.js
module.exports = {
	plugins: ['prettier-plugin-tailwindcss'],
	semi: false,
	singleQuote: true,
	tabWidth: 4,
	useTabs: true,
	jsxSingleQuote: true,
	bracketSameLine: true,
	singleAttributePerLine: true,
	overrides: [
		{
			files: '*.json',
			options: {
				semi: true,
			},
		},
	],
}
