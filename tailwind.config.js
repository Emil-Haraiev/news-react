/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                custom: ["Inter", "sans-serif"], // 🔹 Убеждаемся, что "custom" — это правильное имя
            },
            colors: {
                customPrimary: "#CD5C5C", //"#6С7072",
                customBackground:"#b5b5b8",
            },
        },
    },
    plugins: [],
};