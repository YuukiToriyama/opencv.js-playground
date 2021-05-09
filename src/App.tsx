import React from 'react';
import {
	Grommet
} from 'grommet';
import { grommet } from "grommet/themes/grommet";
import { OpenCvProvider } from "opencv-react";

import AppBar from "./layout/AppBar";
import MainContent from "./layout/MainContent";
import CustomFooter from "./layout/CustomFooter";

const App: React.FunctionComponent = () => {
	const [isOpencvLoaded, setIsOpencvLoaded] = React.useState(false);
	return (
		<Grommet theme={grommet} full>
			<OpenCvProvider openCvPath="https://docs.opencv.org/4.5.0/opencv.js" onLoad={() => setIsOpencvLoaded(true)}>
				<AppBar />
				<MainContent />
				<CustomFooter />
			</OpenCvProvider>
		</Grommet>
	)
}
export default App;