/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['aktiv-grotesk'],
				title: ['new-spirit']
			},
			colors: {
				background: '#f8f3e8',
				'brass-green': '#004235',
				'brass-grey': '#B1B1B1',
				'brass-orange': '#E65E44',
				'brass-pink': '#EEA4C8',
                'brass-yellow': '#F59F00'
			},
			keyframes: {
				floating: {
					'0%, 100%': { transform: 'translate(0, 0px)' },
					'50%': { transform: 'translate(0, 15px)' }
				}
			},
			animation: {
				floating: 'floating 3s ease-in-out infinite',
				'floating-2': 'floating 2s ease-in-out infinite',
			}
		}
	},
	plugins: []
};
