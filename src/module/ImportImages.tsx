import React from "react";
import {
	Box,
	FileInput,
	Grommet,
	Image
} from "grommet";
import sampleImage from "./sample.png"

interface ImportImagesProps {
	onImageLoaded: Function
}

const ImportImages: React.FunctionComponent<ImportImagesProps> = (props) => {
	const [image, setImage] = React.useState(sampleImage);
	const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const reader = new FileReader();
			const file = event.target.files[0];
			reader.readAsDataURL(file);
			reader.onload = () => {
				if (typeof reader.result === "string") {
					setImage(reader.result)
					console.log(reader.result);
				}
			}
		}
	}
	return (
		<Grommet>
			<Box width="small" height="small" round>
				<Image
					src={image}
				/>
				<FileInput
					onChange={onFileInputChange}
				/>
			</Box>
		</Grommet>
	)
}
export default ImportImages