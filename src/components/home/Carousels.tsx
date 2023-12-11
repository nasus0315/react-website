import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const contentStyle: React.CSSProperties = {
	height: "540px",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
};

const Carousels: React.FC = () => (
	<div>
		<Carousel autoplay dots={false}>
			<div>
				<Image
					src="/1234.webp"
					alt="联系方式"
					className="dark:invert"
					width={600}
					height={540}
					priority
				/>
			</div>
			<div>
				<h3 style={contentStyle}>2</h3>
			</div>
			<div>
				<h3 style={contentStyle}>3</h3>
			</div>
			<div>
				<h3 style={contentStyle}>4</h3>
			</div>
		</Carousel>
	</div>
);

export default Carousels;
