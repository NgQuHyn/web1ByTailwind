/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.js', '*.html'],
    content: ['./**/*.html', './**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {
            height: {
                custom: '620px',
            },
            spacing: {
                '40-c': '40rem',
            },
        },
    },
    plugins: [],
};
