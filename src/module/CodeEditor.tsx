import React from 'react';
import * as Monaco from 'monaco-editor';

interface CodeEditorProps {
	defaultValue?: string,
	language?: string,
	theme?: string
	editorWidth: string,
	editorHeight: string
}

const CodeEditor: React.FunctionComponent<CodeEditorProps> = (props) => {
	const refCodeEditor = React.useRef(null);
	React.useEffect(() => {
		Monaco.editor.create(refCodeEditor.current!!, {
			value: props.defaultValue || 'console.log("Hello, world!");',
			language: props.language || 'javascript',
			theme: props.theme || 'vs-dark',
			minimap: { enabled: false }
		})
	}, []);
	return (
		<div
			ref={refCodeEditor}
			style={{ width: props.editorWidth || '500px', height: props.editorHeight || '500px' }}
		></div>
	)
}
export default CodeEditor;