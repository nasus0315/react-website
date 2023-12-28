import Image from "next/image";

interface ImageItem {
	name: string;
	desc: string;
}
interface ImageGridProps {
	imagesList: ImageItem[];
}
const ImageGrid: React.FC<ImageGridProps> = ({ imagesList }) => {
	return (
		<div className="flex flex-wrap w-full h-full box-border">
			{imagesList.map((img, index) => (
				<div key={index} className="relative w-1/4  p-2 box-border">
					<div className="w-full h-64 relative flex">
						<Image
							src={`/hot/${img.name}.jpg`}
							alt={`image-${index}`}
							objectFit="cover"
							layout="fill"
						/>
					</div>
					<div className="mt-2 text-lg font-bold">{img.desc}</div>
				</div>
			))}
		</div>
	);
};

export default ImageGrid;
