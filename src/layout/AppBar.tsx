import React from "react";
import {
	Anchor,
	Box,
	Header,
	Markdown
} from "grommet";
import {
	Code,
	CircleQuestion,
	Github
} from "grommet-icons";
import {
	Dialog
} from "grommet-component-collection";
import helpPage from "../util/helpPage.md";

const AppBar: React.FunctionComponent = () => {
	return (
		<Header background="light-4" pad="medium" height="xsmall">
			<Anchor href="#" icon={<Code color="brand" />} label="OpenCV.js Playground" />
			<Box justify="end" direction="row" gap="medium">
				<Anchor href="https://github.com/YUUKIToriyama/opencv.js-playground" icon={<Github />} label="GitHub" />
				<Dialog
					content={<Box pad="small" overflow="scroll"><Markdown>{helpPage}</Markdown></Box>}
				>
					<Anchor icon={<CircleQuestion />} label="Help" />
				</Dialog>
			</Box>
		</Header>
	)
}
export default AppBar;