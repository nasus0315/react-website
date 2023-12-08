import { Tabs } from "antd";
import type { TabsProps } from "antd";

export default function NavTabs() {
	const onChange = (key: string) => {};

	const tabs = [
		{ key: "0", name: "首页" },
		{ key: "1", name: "产品中心" },
		{ key: "2", name: "成功案例" },
		{ key: "3", name: "关于我们" },
		{ key: "4", name: "联系我们" },
	];

	const items: TabsProps["items"] = tabs.map((item) => ({
		key: item.key,
		label: <span className={`text-white`}>{item.name}</span>,
		children: "Content of Tab Pane 3",
	}));

	return (
		<div className="mt-2">
			<Tabs
				onChange={onChange}
				tabPosition={"top"}
				tabBarStyle={{ background: "#1677ff" }}
				defaultActiveKey="1"
				items={items}
			/>
		</div>
	);
}
