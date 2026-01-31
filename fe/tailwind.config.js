/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                beldi: {
                    sand: '#FDFCF8',
                    tadelakt: '#BEB3A3',
                    tadelaktLight: '#E6E0D5',
                    majorelle: '#1C39BB',
                    majorelleLight: '#3D5AFE',
                    terracotta: '#C06C48',
                    brass: '#D4AF37',
                    charcoal: '#1A1A1A',
                    olive: '#556B2F'
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.8s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
