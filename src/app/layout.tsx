import "./globals.css";
import "tailwindcss/tailwind.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import NavTabs from "@/components/NavTabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<header className="box-border flex flex-row items-center h-24 fixed z-50 top-0 w-full bg-[#f5f5f5] px-32">
						<section>
							<p className="text-4xl text-primary font-bold">
								长青设备有限公司
							</p>
							<p className="text-priamry">
								代理百塑品牌注塑机、销售各品牌二手立式\卧式注塑机
							</p>
						</section>
						<nav className="relative flex-1 h-full">
							<NavTabs />
						</nav>
					</header>
					<div className="mt-24">{children}</div>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
