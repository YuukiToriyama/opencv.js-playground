import React from "react";
import {
	Anchor,
	Box,
	Header,
	Grommet,
} from "grommet";
import {
	Code,
	CircleQuestion,
	Github
} from "grommet-icons";
import { grommet } from "grommet/themes/grommet";

const AppBar: React.FunctionComponent = () => {
	return (
		<Grommet theme={grommet}>
			<Header background="light-4" pad="medium" height="xsmall">
				<Anchor href="#" icon={<Code color="brand" />} label="OpenCV.js Playground" />
				<Box justify="end" direction="row" gap="medium">
					<Anchor href="https://github.com/YUUKIToriyama/opencv.js-playground" icon={<Github />} label="GitHub" />
					<Anchor icon={<CircleQuestion />} onClick={() => alert("help")} label="Help" />
				</Box>
			</Header>
		</Grommet>
	)
}
export default AppBar;