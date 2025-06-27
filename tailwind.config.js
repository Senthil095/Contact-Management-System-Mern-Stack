

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./frontend/src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  royalBlue: "#2c3e50",
		  gold: "#d4af37",
		  ivory: "#fffff0",
		  darkIvory: "#f8f1e4",
		  classicGray: "#2f2f2f",
		},
		fontFamily: {
		  serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
		  sans: ["Helvetica", "Arial", "sans-serif"],
		},
		borderRadius: {
		  lg: "1rem",
		  xl: "1.5rem",
		},
		boxShadow: {
		  royal: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
		},fontFamily: {
			serif: ["Playfair Display", "Georgia", "serif"],
			sans: ["Merriweather", "Helvetica", "Arial", "sans-serif"],
		  },
	  },
	},
	plugins: [],
  };
  
  module.exports = config;



