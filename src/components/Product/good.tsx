import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
	{
		key: "1",
		label: "推荐产品",
		children: <p>{text}</p>,
	},
	{
		key: "2",
		label: "热卖产品",
		children: <p>{text}</p>,
	},
];

const GoodProduct: React.FC = () => {
	return (
		<div className="px-72">
			<Collapse items={items} accordion defaultActiveKey={["1"]} />
		</div>
	);
};

export default GoodProduct;
