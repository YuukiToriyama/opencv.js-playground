import React from "react";
import {
	Box,
	BoxProps,
	FileInput,
	Heading,
	Grid,
	Paragraph
} from "grommet";

import LoadedImage from "./LoadedImage";

const sampleImages = [
	{ src: "https://i.imgur.com/E5fh25x.jpg", name: "wildLife.jpg", id: "sample-1.jpg" },
	{ src: "https://i.imgur.com/ZS8vJ2f.jpg", name: "panda.jpg", id: "sample-2.jpg" },
	{ src: "https://i.imgur.com/IG9UZNO.jpg", name: "foo.jpg", id: "sample-3.jpg" }
]

interface ImportImagesProps {
	onImageLoaded: Function,
	overflow?: BoxProps["overflow"]
}
const ImportImages: React.FunctionComponent<ImportImagesProps> = (props) => {
	const [images, setImages] = React.useState<{ src: string, name: string, id: string }[]>(sampleImages);
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
		<Box>
			<Heading level="2">Import Images</Heading>
			<Paragraph>First, import images which you want to process.</Paragraph>
			<FileInput
				multiple
				onChange={onFileInputChange}
			/>
			<Box pad="small" overflow={props.overflow}>
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
		</Box>
	)
}
export default ImportImages