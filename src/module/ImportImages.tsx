import React from "react";
import {
	Box,
	Card,
	CardBody,
	CardHeader,
	FileInput,
	Heading,
	Grid,
	Grommet,
	Image,
	Paragraph,
	Stack,
} from "grommet";
import { Add } from "grommet-icons";

interface LoadedImageProps {
	src: string,
	name: string,
}
const LoadedImage: React.FunctionComponent<LoadedImageProps> = (props) => {
	return (
		<Stack anchor="top-right">
			<Card width="small" height="small" key={props.name}>
				<Stack anchor="bottom-left">
					<CardBody height="small">
						<Image src={props.src} fit="cover" />
					</CardBody>
					<CardHeader
						pad={{ horizontal: "small", vertical: "small" }}
						background="#000000A0"
						width="small"
						justify="start"
					>
						<Heading level="4" margin="none">{props.name}</Heading>
					</CardHeader>
				</Stack>
			</Card>
			<Box
				background="brand"
				round
				pad={{ horizontal: "small", vertical: "small" }}
			>
				<Add />
			</Box>
		</Stack>
	)
}

const sampleImages = [
	{ src: "https://i.imgur.com/E5fh25x.jpg", name: "wildLife.jpg" },
	{ src: "https://i.imgur.com/ZS8vJ2f.jpg", name: "panda.jpg" },
	{ src: "https://i.imgur.com/IG9UZNO.jpg", name: "foo.jpg" }
]

interface ImportImagesProps {
	onImageLoaded: Function
}
const ImportImages: React.FunctionComponent<ImportImagesProps> = (props) => {
	const [images, setImages] = React.useState<{ src: string, name: string }[]>([]);
	const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const reader = new FileReader();
			const files = event.target.files;
			for (let i = 0; i < files.length; i++) {
				reader.readAsDataURL(files[i]);
				reader.onload = () => {
					if (typeof reader.result === "string") {
						const newImage = {
							// @ts-ignore
							src: reader.result,
							name: files[i].name
						}
						setImages(prevState => prevState.concat([newImage]));
						console.log(reader.result);
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
				onChange={onFileInputChange}
			/>
			<Box pad="small">
				<Grid
					gap="small"
					rows="small"
					columns={{ count: 'fit', size: ['small', 'small'] }}
				>
					{images.length > 0 && images.map(image => (
						<LoadedImage src={image.src} name={image.name} key={image.name} />
					))}
				</Grid>
			</Box>
		</Grommet>
	)
}
export default ImportImages