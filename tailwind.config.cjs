/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
          cursor: {
            'pil': 'url(pill.svg) , pointer',
          }
        }
    },
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
  };
