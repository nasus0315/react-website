import Image from "next/image";
import GoodProduct from "./good";

function Product() {
	return (
		<>
			<div className="relative w-full h-72">
				<Image
					src="/tel.svg"
					alt="联系方式"
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
