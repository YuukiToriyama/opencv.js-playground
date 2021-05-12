import React from "react";
import {
	Box,
	BoxProps,
	Grid,
} from "grommet";
import {
	Gallery
} from "grommet-icons";
import LoadedImage from "./LoadedImage";
import CustomButton from "./CustomButton";

const sampleImages = [
	{ src: "https://i.imgur.com/E5fh25x.jpg", name: "wildLife.jpg", id: "sample_1" },
	{ src: "https://i.imgur.com/ZS8vJ2f.jpg", name: "panda.jpg", id: "sample_2" },
	{ src: "https://i.imgur.com/IG9UZNO.jpg", name: "foo.jpg", id: "sample_3" }
]

interface ImportImagesProps {
	onImageLoaded: Function,
	overflow?: BoxProps["overflow"]
}
const ImportImages: React.FunctionComponent<ImportImagesProps> = (props) => {
	// 読み込んだ画像をstateに保存
	const [images, setImages] = React.useState<{ src: string, name: string, id: string }[]>(sampleImages);
	// ファイルをドラッグ・アンド・ドロップして読み込む仕組みをつくる
	const dropAreaRef = React.useRef<HTMLDivElement>(null);
	const [dragOver, setDragOver] = React.useState(false);
	const storeImportedImages = (files: FileList): void => {
		for (let i = 0; i < files.length; i++) {
			const reader = new FileReader();
			reader.readAsDataURL(files[i]);
			reader.onload = () => {
				if (typeof reader.result === "string") {
					const newImage = {
						// @ts-ignore
						src: reader.result,
						name: files[i].name,
						id: Math.random().toString(32).substring(2) // generate random string for accessing each img element
					};
					setImages(prevState => prevState.concat([newImage]));
				}
			};
		}
	};
	// <input/>がクリックされたとき
	const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const files = event.target.files;
			storeImportedImages(files);
		}
	};
	React.useEffect(() => {
		// 領域にファイルをドロップするとstateに画像を保存
		dropAreaRef.current?.addEventListener("drop", event => {
			event.preventDefault();
			if (event.dataTransfer) {
				const files = event.dataTransfer.files;
				storeImportedImages(files);
			}
		});
		// 領域にマウスが乗ったとき背景色を変える
		dropAreaRef.current?.addEventListener("dragover", event => {
			event.preventDefault();
			setDragOver(true);
		});
		// 領域から離れたときもとに戻す
		dropAreaRef.current?.addEventListener("dragleave", event => {
			event.preventDefault();
			setDragOver(false);
		});
	}, []);

	const backgroundOptionOnDragOver = { "color": "dark-4", "opacity": true };
	const inputElementStyle: React.CSSProperties = { display: "block", opacity: 0, zIndex: 10, position: "absolute", width: "100%", height: "100%" };
	return (
		<Box pad="small" overflow={props.overflow} ref={dropAreaRef} background={dragOver ? backgroundOptionOnDragOver : ""}>
			<Grid
				gap="small"
				rows="small"
				columns={{ count: 'fit', size: ['small', 'small'] }}
			>
				<CustomButton icon={<Gallery size="large" />} text="Click or Drop files here">
					<input type="file" accept="image/png,image/jpeg,image/gif" onChange={onFileInputChange} style={inputElementStyle} />
				</CustomButton>
				{images.length > 0 && images.map(image => (
					<LoadedImage src={image.src} name={image.name} id={image.id} key={image.name} />
				))}
			</Grid>
		</Box>
	)
}
export default ImportImages