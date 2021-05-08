import React from 'react';
import {
	Box,
	Grommet
} from 'grommet';
import { grommet } from "grommet/themes/grommet";

import AppBar from "./layout/AppBar";

const App: React.FunctionComponent = () => {

	return (
		<Grommet theme={grommet} full>
			<Box fill>
				<AppBar />
			</Box>
		</Grommet>
	)
}
export default App;