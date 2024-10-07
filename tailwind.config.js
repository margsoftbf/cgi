/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
				teko: ['Teko', 'sans-serif'],
			},
			colors: {
				darkGray: '#5c5c5a',
				lightGray: '#cbc4b4',
				darkBeige: '#91837a',
				lightBeige: '#FAF7F0',
				orange: '#e99614',
			},
			maxWidth: {
				wrapper: '1280px',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'fade-in-up': 'fadeInUp 1s ease-in-out',
				'fade-in-delay': 'fadeInUp 1.5s ease-in-out',
				'fade-in-delay2': 'fadeInUp 2s ease-in-out',
			},
		},
	},
	plugins: [],
};
