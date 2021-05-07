import React from "react";
import {
	Anchor,
	Box,
	Footer,
	Grommet,
	Header,
	Heading,
	Main,
	Paragraph,
	Text
} from "grommet";
import {
	Code,
	CircleQuestion,
	Github
} from "grommet-icons";
import { grommet } from "grommet/themes/grommet";
import MainContent from "./MainContent";

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
			<MainContent />
			<Footer background="light-4" justify="center" pad="small">
				<Text textAlign="center" size="small">©2021 YUUKIToriyama All Rights Reserved.</Text>
			</Footer>
		</Grommet>
	)
}
export default AppBar;