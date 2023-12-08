import Image from 'next/image';

export default function Header() {
	return (
		<header className="w-full flex flex-row items-center h-24 ml-52">
			<div className="px-6 split">
				<div className="text-4xl text-priamry mb-1">
					深圳市长青设备有限公司
				</div>
				<div className="text-xl text-secondary">
					Shenzhen Evergreen Equipment Co., Ltd.
				</div>
			</div>
			<div className="ml-6">
				<div className="text-xl text-priamry mb-1">
					精密注塑机专业制造商\代理商
				</div>
				<div className="text-base">
					代理百塑品牌注塑机、销售各品牌二手立式\卧式注塑机
				</div>
			</div>
			<div className="ml-8 flex flex-row justify-center align-center">
				<Image
					src="/tel.svg"
					alt="联系方式"
					className="dark:invert"
					width={60}
					height={60}
					priority
				/>
				<div className='flex flex-col align-center justify-center ml-2'>
					<span className='text-2xl'>联系人：刘先生</span>
					<span className='text-2xl'>手机：<span className='text-priamry'>13510441753</span></span>
				</div>
			</div>
		</header>
	);
}
