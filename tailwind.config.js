/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#ffffff",
                "on-primary": "#797b7f",
                "surface": "#797b7f",
                "on-surface": "#ffffff",
                "on-surface-variant": "#d1d3d7",
                "background": "#797b7f",
                "on-background": "#ffffff",
                "surface-container-lowest": "#878a8e",
                "surface-container-low": "#797b7f",
                "surface-container-high": "#6b6d71",
                "outline-variant": "#5a5c60",
            },
            fontFamily: {
                "headline": ["Inter"],
                "body": ["Inter"],
                "label": ["Inter"]
            },
            borderRadius: {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
