/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        screens: {
            mobile: '670px',
        },
    },
    plugins: [],
    darkMode: 'selector',
};
