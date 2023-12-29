"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Company = () => {
	return (
		<div className="box-border flex flex-row items-center pr-52 mb-24 pl-52">
			<div
				className={`flex aninimal-visibal box-border bg-[#f5f5f5] px-8 py-8 mt-16 mr-48`}
			>
				<Image
					src={`/imgs/advantage/logo.PNG`}
					objectFit="cover"
					width={360}
					height={180}
					alt={""}
				/>
			</div>
			<div className="box-border">
				<h1 className="text-primary text-center">走进赢家</h1>
				<p className="font-bold text-xl">东莞市长青机械有限公司</p>
				<p className="leading-7 text-[#313131]">
					深圳市赢家机械有限公司是深圳专业从事卧式注塑机，立式注塑机，注塑机周边设备生产及销售的公司。并提供注塑机维修服务。
					赢家机械向广大客户承诺现金收回各种型号二手注塑机，立式成型机，立式啤机，电木专用注塑机，滑板立式注塑机，双色注塑机，转盘（圆盘）注塑机，立卧式注塑机，C型注塑机，插头专用成型机，并经改良后低价销售，确保回收再利用，减少资源浪费。为创业者降低公司成本，开通财富之路。您公司今天的利益则来自“赢家”塑机。
					赢家机械是专业制造立式塑胶射出成型机的合资企业。通过了ISO质量体系认证。积累了二十多年立式注塑机的研发与制造经验，制造出一大批高精密的注塑机.液压电气均采用日本及台湾名牌产品，在快速、安全耐用、稳定性方面居同行首位，得到客户的一致好评。强大的技术力量，精良的品质、快捷的售后服务，会不断为新老客户提供更多的便利。
				</p>
			</div>
		</div>
	);
};

export default Company;
