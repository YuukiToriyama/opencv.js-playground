import React from 'react';
import {
	Grommet
} from 'grommet';
import { grommet } from "grommet/themes/grommet";
import * as Mirada from "mirada";

import AppBar from "./layout/AppBar";
import MainContent from "./layout/MainContent";
import CustomFooter from "./layout/CustomFooter";

declare var cv: Mirada.CV;

const App: React.FunctionComponent = () => {
	const [isOpencvLoaded, setIsOpencvLoaded] = React.useState(false);
	React.useEffect(() => {
		Mirada.loadOpencv({
			opencvJsLocation: "https://docs.opencv.org/4.5.0/opencv.js", // The location of opencv.js file to load.
			force: true, // It will force the library loading - reloading it if it's already loaded
		}).then(() => {
			setIsOpencvLoaded(true);
			console.log(cv.getBuildInformation());
		}).catch(error => {
			console.error(error);
			setIsOpencvLoaded(false);
		});
	}, []);
	return (
		<Grommet theme={grommet}>
			<AppBar />
			<MainContent />
			<CustomFooter />
		</Grommet>
	)
}
export default App;