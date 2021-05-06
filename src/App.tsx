import React from 'react';
import CodeEditor from './module/CodeEditor';
import { helloWorld } from './util/sampleCodes';

const App: React.FC = () => {
	return (
		<div>
			<h1>hello, world</h1>
			<p>App</p>
			<CodeEditor
				editorWidth='600px'
				editorHeight='90vh'
				language='javascript'
				defaultValue={helloWorld}
			/>
		</div>
	)
}
export default App;