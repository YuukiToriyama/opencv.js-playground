import React from 'react';
import {
	Box,
	Button,
	Collapsible,
	Heading,
	Grommet
} from 'grommet';
import {
	FormClose,
	Notification
} from 'grommet-icons';

/*
import CodeEditor from './module/CodeEditor';
import { helloWorld } from './util/sampleCodes';
*/
const AppBar: React.FunctionComponent = (props) => {
	return (
		<Box
			tag='header'
			direction='row'
			align='center'
			justify='between'
			background='brand'
			pad={{ left: 'medium', right: 'small', vertical: 'small' }}
			elevation='medium'
			style={{ zIndex: 1 }}
			{...props}
		/>
	)
}

const App: React.FunctionComponent = () => {
	const theme: object = {
		global: {
			colors: {
				brand: '#228BE6'
			},
			font: {
				family: 'Roboto',
				size: '18px',
				height: '20px'
			}
		}
	}
	const [showSidebar, setShowSidebar] = React.useState(true);
	return (
		<Grommet theme={theme} full themeMode='dark'>
			<Box fill>
				<AppBar>
					<Heading level='3' margin='none'>OpenCV.js Playground</Heading>
					<Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} hoverIndicator />
				</AppBar>
				<Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
					<Box flex align='center' justify='center'>
						app body
					</Box>
					<Collapsible direction='horizontal' open={showSidebar}>
						<Box
							flex
							width='medium'
							background='light-2'
							elevation='small'
							align='center'
							justify='center'
						>
							sidebar
						</Box>
						<Button
							icon={<FormClose />}
							onClick={() => setShowSidebar(false)}
						></Button>
					</Collapsible>
				</Box>
			</Box>
		</Grommet>
	)
}
export default App;