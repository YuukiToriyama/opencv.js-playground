import React from 'react';
import * as Monaco from 'monaco-editor';
//import { cv } from "opencv-wasm";

interface CodeEditorProps {
	defaultValue?: string,
	language?: string,
	theme?: string
	editorWidth: string,
	editorHeight: string,
	onTextChange?: Function
}

const getOpenCVjsTypeFile = (): Promise<string | any> => {
	//const url = "https://cdn.jsdelivr.net/npm/opencv-wasm@4.3.0-10/types/opencv.ts";
	const url = "https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/leaflet/index.d.ts"
	return fetch(url).then(response => {
		return response.text();
	}).catch(error => {
		return error;
	});
}

getOpenCVjsTypeFile().then(typings => {
	console.log(typings);
	Monaco.languages.typescript.javascriptDefaults.addExtraLib(typings);
})
const CodeEditor: React.FunctionComponent<CodeEditorProps> = (props) => {
	const refCodeEditor = React.useRef(null);
	React.useEffect(() => {
		// MonacoEditorを作成
		let editor = Monaco.editor.create(refCodeEditor.current!!, {
			value: props.defaultValue || 'console.log("Hello, world!");',
			language: props.language || 'javascript',
			theme: props.theme || 'vs-dark',
			minimap: { enabled: false }
		});
		// テキストが変わった場合props.onTextChange()を実行
		editor.onDidChangeModelContent(() => {
			let text = editor.getValue();
			if (props.onTextChange !== undefined) {
				props.onTextChange(text);
			}
		});
	}, []);
	return (
		<div
			ref={refCodeEditor}
			style={{ width: props.editorWidth || '500px', height: props.editorHeight || '500px' }}
		></div>
	)
}
export default CodeEditor;