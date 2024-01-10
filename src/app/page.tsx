import Carousels from "@/components/home/Carousels";
import Overview from "@/components/home/Overview";
import Company from "@/components/home/company";
import Footer from "@/components/home/Footer";

export default function Home() {
	return (
		<main className="">
			<Carousels />
			<Overview />
			<Company />
			<Footer />
		</main>
	);
}
