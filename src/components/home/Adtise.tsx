import Image from "next/image";

const Adtise = () => {
	return (
		<div className="flex flex-col items-center mt-6">
			<div
				className="relative bg-auto bg-no-repeat bg-center w-[1600px]"
				style={{
					backgroundImage: 'url("/imgs/advantage/ad_bg.jpg")',
					height: "120px",
				}}
			>
				<div className="absolute left-[46%] bottom-[12px] text-white text-xl">
					服务热线：13632689162
				</div>
			</div>

			<div className="step mt-6">
				<div className="step-item flex flex-row justify-between py-8">
					<div className="flex flex-col">
						<div className="flex flex-row relative items-center">
							<div
								className="relative bg-auto bg-no-repeat bg-center w-[179px]"
								style={{
									backgroundImage:
										'url("/imgs/advantage/step.png")',
									height: "64px",
								}}
							>
								<span className="absolute text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
									01
								</span>
							</div>
							<div className="flex flex-col ml-2">
								<span className="font-bold text-2xl">
									10多年注塑机
								</span>
								<span className="text-red-500 font-bold text-lg">
									——研发与生产经验！
								</span>
							</div>
						</div>
						<p className="w-[434px] leading-8">
							拥有多年的注塑设备制造经验，完善的工艺水平及先进的生产设备，根据用户的特殊要求进行设计；为客户提供注塑工艺分析，一体化生产设备制造的一站式服务，让客户更省时，省力，省心。
						</p>
					</div>
					<div className="relative w-[490px] h-[256px] ml-32">
						<Image
							src={"/imgs/advantage/ad_01.jpg"}
							objectFit="cover"
							layout="fill"
							alt={""}
						/>
					</div>
				</div>
			</div>

			<div className="step mt-6">
				<div className="step-item flex flex-row justify-between ">
					<div className="relative w-[490px] h-[256px]">
						<Image
							src={"/imgs/advantage/ad_02.jpg"}
							objectFit="cover"
							layout="fill"
							alt={""}
						/>
					</div>
					<div className="flex flex-col ml-32">
						<div className="flex flex-row relative items-center">
							<div
								className="relative bg-auto bg-no-repeat bg-center w-[179px]"
								style={{
									backgroundImage:
										'url("/imgs/advantage/step.png")',
									height: "64px",
								}}
							>
								<span className="absolute text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
									02
								</span>
							</div>
							<div className="flex flex-col ml-2">
								<span className="font-bold text-2xl">
									专业团队
								</span>
								<span className="text-red-500 font-bold text-lg">
									——精益求精，品质保障
								</span>
							</div>
						</div>
						<p className="w-[434px] leading-8">
							从一流的加工中心检测设备及严格的生产作业标准，对每一生产环节给予精确质量保障
							专业研发设计团队，设备结构合理，操作更方便，为客户降低人力成本
						</p>
					</div>
				</div>
			</div>

			<div className="step mt-6">
				<div className="step-item flex flex-row justify-between py-8">
					<div className="flex flex-col">
						<div className="flex flex-row relative items-center">
							<div
								className="relative bg-auto bg-no-repeat bg-center w-[179px]"
								style={{
									backgroundImage:
										'url("/imgs/advantage/step.png")',
									height: "64px",
								}}
							>
								<span className="absolute text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
									03
								</span>
							</div>
							<div className="flex flex-col ml-2">
								<span className="font-bold text-2xl">
									无忧售后
								</span>
								<span className="text-red-500 font-bold text-lg">
									——完善售后，让您毫无后顾之忧
								</span>
							</div>
						</div>
						<p className="w-[434px] leading-8">
							资深经验工程师提供专业技术指导，解决您在生产过程中遇到的问题；
							7*24小时电话响应，专业客服随时解答
						</p>
					</div>
					<div className="relative w-[490px] h-[256px] ml-32">
						<Image
							src={"/imgs/advantage/ad_01.jpg"}
							objectFit="cover"
							layout="fill"
							alt={""}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Adtise;
