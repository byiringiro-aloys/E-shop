/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                themeyellow: "#f5e60d",
                themepupple: "#502ec3",
            },
        },
    },
    plugins: [],
}