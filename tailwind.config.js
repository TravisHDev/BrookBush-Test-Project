
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    // "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['MetricHPEXS', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      width: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'virtual-tour': "url('/src/assets/image (12).jpg')",
        'footer-image': "url('/src/assets/image (13).jpg')",
        'countdown' : "url('/src/assets/network/image (7).jpg')",
        'event-background-image' : "url('/src/assets/network/image (26).jpg')",
        'greenlake-image': "url('/src/assets/image (29).jpg')",
        'countDown-text': "url('/src/assets/network/image (9).jpg')",
        'privacy-background' : "url('/src/assets/privacy/image.png')",
        'article-cover': "url('/src/assets/blog/image (8).jpg')",
        'rightbar-lastImage' : "url('/src/assets/blog/rightbar.jpg')",
        'analytic-image' : "url('/src/assets/blog/analyticImage.jpg')",
        'analytic-newletter' : "url('/src/assets/blog/rightbar.jpg')"
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
}