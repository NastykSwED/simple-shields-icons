/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/layouts/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				primary: '#1F2023',
			},
		},
	},

	plugins: [],
};
