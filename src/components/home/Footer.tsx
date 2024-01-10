import Image from "next/image";

const Footer = () => {
	return (
		<div className="box-border flex flex-col items-center justify-center mt-12">
			<h1 className="text-primary text-center flex items-center">
				联系赢家
			</h1>
			<div
				className={`relative flex aninimal-visibal w-[1600px] h-[216px]`}
				style={{ backgroundImage: "url(/imgs/about/foot_bg.png)" }}
			>
				<div className="absolute left-[45%] top-2 text-white">
					东莞市长青机械有限公司
				</div>
				<div className="w-full h-full flex items-center justify-center mt-6">
					<Image
						src={`/imgs/about/logo.png`}
						objectFit="cover"
						width={365}
						height={103}
						alt={""}
					/>
					<section className="ml-24 flex flex-col items-center">
						<p>
							联系电话：13751183085 沈小姐　 传真：0769-89339751
						</p>
						<p>
							手机：13632689162 刘先生
							粤ICP备2023000093号地址：江西省吉安市吉水县河西工业区厂房A栋
						</p>
						<p>地址：东莞市虎门镇大宁民安路97号(大宁治保会旁)</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Footer;
