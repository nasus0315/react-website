import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "#1677ff",
				secondary: "#666666",
			},
			keyframes: {
				fadeInRight: {
					"0%": { transform: "translateX(30px)" },
					"100%": { transform: "translateX(0)" },
				},
			},
			animation: {
				fadeInRight: "fadeInRight 1s ease-in-out infinite",
			},
		},
	},
	plugins: [],
	corePlugins: {
		// 解决antd和tailwindcss样式冲突
		preflight: false,
	},
};
export default config;
