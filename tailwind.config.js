/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    theme: {
        extend: {
            animation: {
                fadeInOut: 'fadeInOut 3s',
            },
            keyframes: {
                fadeInOut: {
                    '0%': { opacity: 0 },
                    '20%': { opacity: 1 },
                    '80%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
            },
        },
    },
    plugins: [require('tailwindcss-animated')],
}
