import Header from "@/components/layouts/Header";
import NavTabs from "@/components/layouts/NavTabs";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col overflow-x-hidden">
			<Header />
			<NavTabs />
		</main>
	);
}
