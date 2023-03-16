/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				mont: "'Mont', serif",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
