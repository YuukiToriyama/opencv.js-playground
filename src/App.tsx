import React from 'react';
import {
	Box,
	Grommet
} from 'grommet';
import { grommet } from "grommet/themes/grommet";
//import { OpenCvProvider } from "opencv-react";

import AppBar from "./layout/AppBar";
import MainContent from "./layout/MainContent";
import CustomFooter from "./layout/CustomFooter";

const App: React.FunctionComponent = () => {

	return (
		<Grommet theme={grommet} full>
			<Box fill>
				<AppBar />
				<MainContent />
				<CustomFooter />
			</Box>
		</Grommet>
	)
}
export default App;