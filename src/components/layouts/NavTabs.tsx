import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Home from "@/components/menus/home/index";
import Product from "@/components/menus/Product/index";

export default function NavTabs() {
	const onChange = (key: string) => {};

	const tabs = [
		{ key: "0", name: "首页", element: <Home /> },
		{ key: "1", name: "产品中心", element: <Product /> },
		{ key: "2", name: "成功案例", element: <Home /> },
		{ key: "3", name: "关于我们", element: <Home /> },
		{ key: "4", name: "联系我们", element: <Home /> },
	];

	const items: TabsProps["items"] = tabs.map((item) => ({
		key: item.key,
		label: <span className={`text-white text-xl`}>{item.name}</span>,
		children: item.element,
	}));

	return (
		<div className="nav-tab mt-2">
			<Tabs
				tabPosition={"top"}
				tabBarStyle={{ background: "#1677ff", paddingLeft: "300px",marginBottom: 0 }}
				defaultActiveKey="0"
				items={items}
				tabBarGutter={200}
			/>
		</div>
	);
}
