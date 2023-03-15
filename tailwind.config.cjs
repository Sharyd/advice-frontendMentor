/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        colors: {
            // Primary
            LightCyan: 'hsl(193, 38%, 86%)',
            NeonGreen: 'hsl(150, 100%, 66%)',
            // Neutral
            DarkBlue: 'hsl(218, 23%, 16%)',
            GrayishBlue: 'hsl(217, 19%, 38%)',
            DarkGrayishblue: 'hsl(217, 19%, 24%)',
            red: 'rgb(239 68 68)',
        },
        boxShadow: {
            customShadow:
                '0 0 0px hsl(150, 100%, 66%), 0 0 50px hsl(150, 100%, 66%) ',
        },
    },
    plugins: [],
}
