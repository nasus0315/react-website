import GoodProduct from "./Good";
import Carousels from "./Carousels";
import Case from "./Case";
import Adtise from "./Adtise";
import AboutMe from "./AboutMe";

function Home() {
	return (
		<>
			<Carousels />
			<GoodProduct />
			<Case />
			<Adtise />
			<AboutMe />
		</>
	);
}

export default Home;
