/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		keyframes: {
			fadeInTop: {
			  '0%': { opacity: '0', transform: 'translateY(-20px)' },
			  '100%': { opacity: '1', transform: 'translateY(0)' },
			},
		  },
		  animation: {
			fadeInTop: 'fadeInTop 0.5s ease-out',
		  },
	  },
	},
	plugins: [],
  }