import { Tabs } from "antd";
import type { TabsProps } from "antd";
import AcgGood from "./tabs/acg-good";
import BsGood from "./tabs/bs-good";
import ShbGood from "./tabs/shb-good";
import ZpjGood from "./tabs/zpj-good";

export default function AllGoods() {
	const tabs = [
		{ key: "0", name: "爱采购", element: <AcgGood /> },
		{ key: "1", name: "百塑高速机", element: <BsGood /> },
		{ key: "2", name: "双滑板机", element: <ShbGood /> },
		{ key: "3", name: "转盘机", element: <ZpjGood /> },
	];

	const items: TabsProps["items"] = tabs.map((item) => ({
		key: item.key,
		label: <span className={`text-xl`}>{item.name}</span>,
		children: item.element,
	}));

	return (
		<div className="nav-tab mt-2">
			<Tabs
				tabPosition={"top"}
				tabBarStyle={{
					marginBottom: 0,
				}}
				defaultActiveKey="1"
				items={items}
				tabBarGutter={200}
			/>
		</div>
	);
}
