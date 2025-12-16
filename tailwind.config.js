/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
        fontFamily: {
            inter: ["var(--font-inter)"],
            montserrat: ["var(--font-montserrat)"],
            yesteryear: ["var(--font-yesteryear)"],
        },
        },
    },
    plugins: [],
};
