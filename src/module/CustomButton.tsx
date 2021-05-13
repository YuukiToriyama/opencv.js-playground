import React from "react";
import {
	Box,
	BoxProps,
	Text
} from "grommet";

interface CustomButtonProps {
	icon: React.ReactNode,
	text: string,
	children?: React.ReactChild,
	onClick?: BoxProps["onClick"]
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = (props) => {
	const func = () => { };
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
			onClick={props.onClick || func}
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