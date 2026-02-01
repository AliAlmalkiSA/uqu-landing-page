/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1B8354',
                    50: '#f2fbf7',
                    100: '#e1f5ec',
                    200: '#c5ebd9',
                    300: '#9bdbc0',
                    400: '#6ac3a1',
                    500: '#43a683',
                    600: '#2f8768',
                    700: '#276c55',
                    800: '#235645',
                    900: '#1d473a',
                    950: '#0f2821',
                },
                secondary: '#F3F4F6',
                gold: {
                    DEFAULT: '#C3831D', // DGA Official Gold
                    400: '#D89B2B',
                    500: '#C3831D',
                    600: '#A46C15',
                }
            },
            fontFamily: {
                sans: ['"IBM Plex Sans Arabic"', '"IBM Plex Sans"', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
            }
        },
    },
    plugins: [],
}
