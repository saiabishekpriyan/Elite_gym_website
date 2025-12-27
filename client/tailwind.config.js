/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-cyan': '#00E7FF',
                'neon-green': '#00FF6A',
                'dark-bg': '#000000',
                'charcoal': '#0D0D0D',
                'charcoal-light': '#111111',
                'light-gray': '#BBBBBB',
            },
            fontFamily: {
                sans: ['Poppins', 'Inter', 'sans-serif'],
            },
            boxShadow: {
                'neon': '0 0 10px rgba(0, 231, 255, 0.7)',
                'neon-green': '0 0 10px rgba(0, 255, 106, 0.7)',
            }
        },
    },
    plugins: [],
}
