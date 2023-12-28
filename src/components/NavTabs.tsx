"use client";

import { useState } from 'react';
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useRouter } from "next/navigation";

interface RouteKeyMap {
	[key: string]: string;
}

const routes: RouteKeyMap = {
	"1": "/",
	"2": "/product",
	"3": "/about",
	"4": "/contact",
};

const NavTabs = () => {
	const router = useRouter();
	const [activeKey, setActiveKey] = useState('1');

	const handleTabChange = (key: string) => {
		setActiveKey(key)
		router.push(routes[key]);
	};

	const tabs = [
		{ key: "1", name: "首页" },
		{ key: "2", name: "产品中心" },
		{ key: "3", name: "关于我们" },
		{ key: "4", name: "联系我们" },
	];

	const items: TabsProps["items"] = tabs.map((item) => ({
		key: item.key,
		label: (
			<span className={`tab-item text-black text-xl ${activeKey === item.key ? 'active' : ''}`}>{item.name}</span>
		),
	}));

	return (
		<Tabs
			defaultActiveKey={"1"}
			onChange={handleTabChange}
			style={{ alignItems: "center", marginTop: 12 }}
			tabBarGutter={100}
			items={items}
		/>
	);
};

export default NavTabs;
