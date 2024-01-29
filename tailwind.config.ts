
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#00121C'
      },
      colors: {
        'call-icon': '#4CAF50',
        'mute-unmute-icon': '#999999',
        'report-icon': '#FF5733',
        'send-icon': '#2196F3',
      },
      container: {
        center: true,
        padding: '1rem'
      },
    },
  },
  plugins: [],
}