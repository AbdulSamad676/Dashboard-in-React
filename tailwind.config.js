// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
// 	darkMode: 'class',
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // 'dark' is applied as a class for the dark theme
	theme: {
		extend: {
			colors: {
				// Define your theme-specific colors
				light: {
					background: '#ffffff', // White background for light theme
					text: '#000000',       // Black text for light theme
				},
				dark: {
					background: '#000000', // Black background for dark theme
					text: '#ffffff',       // White text for dark theme
				},
				green: {
					background: '#d1fae5', // Light green background
					text: '#065f46',       // Dark green text
				},
				blue: {
					background: '#dbeafe', // Light blue background
					text: '#1e3a8a',       // Dark blue text
				},
			},
		},
	},
	plugins: [],
};
