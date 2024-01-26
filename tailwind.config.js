/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html}",
    ],
    theme: {
        extend: {
            colors: {
                pc: "#1195FF",
                "nc-1": "#292929",
                "nc-2": "#555555"
            },
        },
    },
    plugins: [],
}

