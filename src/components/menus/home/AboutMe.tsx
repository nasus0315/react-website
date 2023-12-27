import Image from "next/image";

const AboutMe = () => {
	return (
		<div>
			<div className="flex justify-center">
				<div
					className="relative bg-auto bg-no-repeat bg-center w-[1600px]"
					style={{
						backgroundImage: 'url("/imgs/about/top_bg.png")',
						height: "240px",
					}}
				>
					<div className="absolut top-0 left-0 w-full h-full">
						<h3 className="ml-[50%] text-white">联系我们</h3>
						<div className="flex flex-row items-center justify-center mt-8">
							<div className="relative w-[365px] h-[103px] ">
								<Image
									src={"/imgs/about/logo.png"}
									objectFit="cover"
									layout="fill"
									alt={""}
								/>
							</div>
							<div className="ml-24">
								<p>
									联系电话：13751183085 沈小姐　
									传真：0769-89339751
								</p>
								<p>
									手机：13632689162 刘先生 粤ICP备2023000093号
									地址：江西省吉安市吉水县河西工业区厂房A栋
								</p>
								<p>
									地址：东莞市虎门镇大宁民安路97号(大宁治保会旁)
									xml地图 html地图 建站优化支持：聚搜网络
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
