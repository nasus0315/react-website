import Image from "next/image";
import { caseList } from "@/config/data.json";

const Case = () => {
	return (
		<div className="flex flex-col items-center mt-6">
			<div
				className="relative bg-center bg-no-repeat w-[1200px]"
				style={{
					backgroundImage: 'url("/imgs/case_topBg.png")',
					height: "84px",
				}}
			>
				<div className="absolute pl-52 top-1/3 text-white text-2xl">
					赢家成功案例
				</div>
			</div>
			<div className="w-[1200px] mt-2 flex flex-row">
				<div className="flex shrink-0 relative w-[300px] h-[434px]">
					<Image
						src={"/imgs/case/case_main.jpg"}
						objectFit="cover"
						layout="fill"
						alt={""}
					/>
				</div>
				<div className="flex flex-row flex-wrap w-full ml-2">
					{caseList.map((img, index) => (
						<div
							key={index}
							className="relative w-1/3  p-2 box-border"
						>
							<div className="w-full h-40 relative flex">
								<Image
									src={`/imgs/case/${img.name}.jpg`}
									alt={`image-${index}`}
									objectFit="cover"
									layout="fill"
								/>
							</div>
							<div className="mt-2 text-lg font-bold">
								{img.desc}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Case;
