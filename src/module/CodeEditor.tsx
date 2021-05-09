import React from 'react';
import * as Monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

interface CodeEditorProps {
	defaultValue?: string,
	language?: string,
	theme?: string
	editorWidth: string,
	editorHeight: string,
	onTextChange?: Function
}

const CodeEditor: React.FunctionComponent<CodeEditorProps> = (props) => {
	const refCodeEditor = React.useRef(null);
	React.useEffect(() => {
		// MonacoEditorを作成
		let editor = Monaco.editor.create(refCodeEditor.current!!, {
			value: props.defaultValue || 'console.log("Hello, world!");',
			language: props.language || 'javascript',
			theme: props.theme || 'vs-dark',
			minimap: { enabled: false },
			automaticLayout: true, // 画面サイズの変更に応じて自動変形
			wordWrap: "on",
			wordWrapColumn: 0 // 右端で折返し
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