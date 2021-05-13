import React from "react";
import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Heading,
	Image,
	Stack,
	Text,
	Tip
} from "grommet";

const ImageTip: React.FunctionComponent = () => {
	return (
		<Box
			pad="small"
			gap="small"
			width={{ max: "small" }}
			round="small"
			background="background-front"
			responsive={false}
		>
			<Text weight="bold">Use this on your code</Text>
			<Text size="small">Copy to clipboard on click</Text>
		</Box>
	)
}

interface LoadedImageProps {
	src: string,
	name: string,
	id: string
}
const LoadedImage: React.FunctionComponent<LoadedImageProps> = (props) => {
	const handleCardOnClicked = () => {
		// インポートした画像をjavascriptから呼び出すコードを生成
		const code = `const image_${props.id} = document.getElementById("${props.id}"); // ${props.name}`;
		// Addアイコンをクリックするとそれをクリップボードにコピーする
		navigator.clipboard.writeText(code).then(() => {
			alert("Copied to clipboard!");
		})
	}
	return (
		<Tip plain content={<ImageTip />} dropProps={{ align: { top: 'bottom' } }} >
			<Card width="small" height="small" key={props.name} onClick={handleCardOnClicked} >
				<Stack anchor="bottom-left">
					<CardBody height="small">
						<Image src={props.src} fit="cover" />
					</CardBody>
					<img src={props.src} id={props.id} crossOrigin="anonymous" style={{ visibility: "hidden" }} />
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
		</Tip>
	)
}
export default LoadedImage;