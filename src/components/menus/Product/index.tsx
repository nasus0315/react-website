import Image from "next/image";
import GoodProduct from "../../home/Good";
import AllGoods from "./allGoods";

function Product() {
	return (
		<>
			<div className="relative box-border w-full h-72">
				<Image
					src="/imgs/main.JPG"
					alt="注塑机"
					className="dark:invert"
					priority
					layout="fill"
				/>
			</div>
			<GoodProduct />
		</>
	);
}

export default Product;
