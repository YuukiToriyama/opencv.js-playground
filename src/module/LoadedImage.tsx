import React from "react";
import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Heading,
	Image,
	Stack
} from "grommet";
import { Add } from "grommet-icons";

interface LoadedImageProps {
	src: string,
	name: string,
	id: string
}
const LoadedImage: React.FunctionComponent<LoadedImageProps> = (props) => {
	const handleAddButtonClicked = () => {
		// インポートした画像をjavascriptから呼び出すコードを生成
		const code = `const image_${props.id} = document.getElementById("${props.id}"); // ${props.name}`;
		// Addアイコンをクリックするとそれをクリップボードにコピーする
		navigator.clipboard.writeText(code).then(() => {
			alert("Copied to clipboard!");
		})
	}
	return (
		<Stack anchor="top-right">
			<Card width="small" height="small" key={props.name}>
				<Stack anchor="bottom-left">
					<CardBody height="small">
						<Image src={props.src} id={props.id} fit="cover" />
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
				onClick={handleAddButtonClicked}
			>
				<Add />
			</Box>
		</Stack>
	)
}
export default LoadedImage;