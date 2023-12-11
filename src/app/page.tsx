import Header from "@/components/Header";
import dynamic from "next/dynamic";

const NavTabs = dynamic(() => import("@/components/NavTabs"), { ssr: false });
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col overflow-x-hidden">
			<Header />
			<NavTabs />
		</main>
	);
}
