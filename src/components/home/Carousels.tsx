import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const images = ["bg1", "bg2", "bg3"];

const Carousels: React.FC = () => (
	<div>
		<Carousel autoplay>
			{images.map((img, index) => (
				<div className="w-full h-[460px] relative flex">
					<Image
						src={`/imgs/${img}.jpg`}
						alt={`image-${index}`}
						objectFit="cover"
						layout="fill"
					/>
				</div>
			))}
		</Carousel>
	</div>
);

export default Carousels;
