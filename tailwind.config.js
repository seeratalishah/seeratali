/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        'px': '1px',   // You can add custom radius values
        '3': '3px',    // Example: 'rounded-3' will apply a 3px border radius
        '6': '6px',    // Example: 'rounded-4' will apply a 4px border radius
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
