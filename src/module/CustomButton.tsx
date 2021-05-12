import React from "react";
import {
	Box,
	Text
} from "grommet";

interface CustomButtonProps {
	icon: React.ReactNode,
	text: string,
	children?: React.ReactChild
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = (props) => {
	return (
		<Box
			round
			border
			width="small"
			height="small"
			align="center"
			justify="center"
			hoverIndicator={{
				background: {
					color: 'background-contrast',
				},
				elevation: 'medium',
			}}
			onClick={() => { }}
			key="add new image"
			style={{ position: "relative" }}
		>
			{props.children}
			{props.icon}
			<Text>{props.text}</Text>
		</Box>
	)
}
export default CustomButton;