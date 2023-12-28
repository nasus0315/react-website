"use client";

import { useState } from "react";

const Overview = () => {
	const [activeKey, setActiveKey] = useState("0");

	const arr = ["爱采购", " 百塑高速机", "双滑板机", "转盘机"];
	const handleTabChange = (key: string) => {
		setActiveKey(key);
	};

	return (
		<div>
			<h1 className="text-primary text-center">产品概览</h1>
			<ul className="flex flex-row justify-center mt-8">
				{arr.map((item, index) => {
					return (
						<li
							key={index}
							onClick={() => handleTabChange(index.toString())}
							className={`li-item cursor-pointer ${
								+activeKey == index ? "active" : ""
							}`}
						>
							<span className="block skew-x-[30deg]">{item}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Overview;
