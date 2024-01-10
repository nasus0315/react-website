"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Company = () => {
	return (
		<div className="box-border flex flex-col items-center justify-center">
			<h1 className="text-primary text-center flex items-center">
				走进赢家&nbsp;<span className="text-black text-lg">·</span>
				&nbsp;
				<span className="text-black text-lg">
					东莞市长青机械有限公司
				</span>
			</h1>
			<div
				className={`flex aninimal-visibal box-border bg-[#f5f5f5] px-4 py-4`}
			>
				<Image
					src={`/imgs/about/bg.jpg`}
					objectFit="cover"
					width={1600}
					height={240}
					alt={""}
				/>
			</div>
		</div>
	);
};

export default Company;
