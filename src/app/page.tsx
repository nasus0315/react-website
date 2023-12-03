import Header from '@/components/Header';
import NavTabs from '@/components/NavTabs';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<Header />
			<NavTabs />
		</main>
	);
}
