import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const images = ["swiper-1", "swiper-2", "swiper-3"];

const Carousels: React.FC = () => (
	<div>
		<Carousel autoplay>
			{images.map((img, index) => (
				<div className="w-full h-[460px] relative flex">
					<Image
						src={`/imgs/home/${img}.jpg`}
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
