"use client";

import { useState } from "react";
import Image from "next/image";

const Overview = () => {
	const [activeKey, setActiveKey] = useState("0");

	const arr = ["爱采购", " 百塑高速机", "双滑板机", "转盘机", "更多..."];
	const arr2 = ["百科", "立式机", "双色机", "高速机", "卧室机", , "滑板机"];
	const arr3 = [
		{
			img: "85TBK",
			desc: "85T百科标准机",
		},
		{
			img: "55TLS",
			desc: "55T立式机",
		},
		{
			img: "110TSS",
			desc: "110T双色机",
		},
		{
			img: "BS55TSHBGS",
			desc: "百塑55T双滑板高速机",
		},
		{
			img: "85TBKZPJ",
			desc: "85T百科转盘机",
		},
	];
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
			<ul className="flex flex-row mt-6 ml-[28%]">
				{arr2.map((item, index) => {
					return (
						<>
							<li key={index} className="px-2 cursor-pointer">
								<span>{item}</span>
							</li>
							{index < arr2.length - 1 && (
								<span className="text-gray-300">|&nbsp;</span>
							)}
						</>
					);
				})}
			</ul>
			<ul className="flex flex-row box-border justify-center mt-6 w-full bg-[#f4f5f6] py-12">
				{arr3.map((item, index) => {
					return (
						<>
							<li
								key={index}
								className="relative flex flex-col cursor-pointer mr-6 px-4 py-4 bg-white"
							>
								<Image
									className="animation-img"
									src={`/imgs/case/${item.img}.jpg`}
									objectFit="cover"
									width={300}
									height={360}
									alt={""}
								/>
								<div className="relative text-gray-400 py-4 text-base text-center mt-3">
									{item.desc}
								</div>
							</li>
						</>
					);
				})}
			</ul>
		</div>
	);
};

export default Overview;
