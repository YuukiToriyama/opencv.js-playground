import React from "react";
import {
	Anchor,
	Box,
	Header,
} from "grommet";
import {
	Code,
	CircleQuestion,
	Github
} from "grommet-icons";

const AppBar: React.FunctionComponent = () => {
	return (
		<Header background="light-4" pad="medium" height="xsmall">
			<Anchor href="#" icon={<Code color="brand" />} label="OpenCV.js Playground" />
			<Box justify="end" direction="row" gap="medium">
				<Anchor href="https://github.com/YUUKIToriyama/opencv.js-playground" icon={<Github />} label="GitHub" />
				<Anchor icon={<CircleQuestion />} onClick={() => alert("help")} label="Help" />
			</Box>
		</Header>
	)
}
export default AppBar;