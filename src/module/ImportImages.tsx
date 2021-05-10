import React from "react";
import {
	Box,
	FileInput,
	Heading,
	Grid,
	Grommet,
	Paragraph
} from "grommet";

import LoadedImage from "./LoadedImage";
/*
const sampleImages = [
	{ src: "https://i.imgur.com/E5fh25x.jpg", name: "wildLife.jpg" },
	{ src: "https://i.imgur.com/ZS8vJ2f.jpg", name: "panda.jpg" },
	{ src: "https://i.imgur.com/IG9UZNO.jpg", name: "foo.jpg" }
]
*/
interface ImportImagesProps {
	onImageLoaded: Function
}
const ImportImages: React.FunctionComponent<ImportImagesProps> = (props) => {
	const [images, setImages] = React.useState<{ src: string, name: string, id: string }[]>([]);
	const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const files = event.target.files;
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
						}
						setImages(prevState => prevState.concat([newImage]));
						console.log(images);
					}
				}
			}
		}
	}
	return (
		<Grommet>
			<Heading level="2">Import Images</Heading>
			<Paragraph>First, import images which you want to process.</Paragraph>
			<FileInput
				multiple
				onChange={onFileInputChange}
			/>
			<Box pad="small">
				<Grid
					gap="small"
					rows="small"
					columns={{ count: 'fit', size: ['small', 'small'] }}
				>
					{images.length > 0 && images.map(image => (
						<LoadedImage src={image.src} name={image.name} id={image.id} key={image.name} />
					))}
				</Grid>
			</Box>
		</Grommet>
	)
}
export default ImportImages