import React from "react";
import {
	Heading,
	Main,
	Paragraph
} from "grommet";

const MainContent: React.FunctionComponent = () => {
	return (
		<Main pad="large">
			<Heading>Main content</Heading>
			<Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
		</Main>
	)
}
export default MainContent;