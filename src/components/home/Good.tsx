"use client";

import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import ImageGrid from "../grid";
import data from "@/config/data.json";

const items: CollapseProps["items"] = [
	{
		key: "1",
		label: <span className="text-[#fff] text-lg">推荐产品</span>,
		children: <ImageGrid imagesList={data.hotList} />,
	},
	{
		key: "2",
		label: <span className="text-[#fff] text-lg">热卖产品</span>,
		children: <p>22222</p>,
	},
];

const GoodProduct: React.FC = () => {
	const CustomExpandIcon = (panelProps: any) => {
		return (
			<CaretRightOutlined
				rotate={panelProps.isActive ? 90 : 0}
				style={{ color: "#fff" }}
			/>
		);
	};

	return (
		<div className="px-72 w-full box-border mt-9">
			<Collapse
				className="shadow-md mt-12"
				style={{ background: "#1677ff", color: "#fff", width: "100%" }}
				items={items}
				accordion
				expandIcon={CustomExpandIcon}
				defaultActiveKey={["1"]}
			/>
		</div>
	);
};

export default GoodProduct;
