import React from "react";
import {
	Button,
	Heading,
	Main,
	Paragraph,
	TextArea
} from "grommet";

import CodeEditor from '../module/CodeEditor';
import { helloWorld } from '../util/sampleCodes';

const MainContent: React.FunctionComponent = () => {
	const [code, setCode] = React.useState(helloWorld);
	const onEditorCodeChange = (currentCode: string) => {
		setCode(currentCode);
		//console.log(currentCode)
	}
	const [log, setLog] = React.useState("Console");
	const onButtonClick = () => {
		// console.log()を書き換えて結果を<TextArea/>に表示する
		console.log = (text: string) => {
			setLog(prevState => text + "\n" + prevState);
		}
		// window.onerror()を書き換えてエラーが出た場合にログに表示できるようにする
		window.onerror = (message, url, lineNumber, columnNumber, error) => {
			if (lineNumber !== undefined) {
				alert(lineNumber - 2 + ":" + columnNumber + ":" + message);
			}
		}
		// コードを実行
		const func = new Function(code);
		func();
	}
	return (
		<Main pad="large">
			<Heading>Main content</Heading>
			<Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
			<CodeEditor
				defaultValue={code}
				language="javascript"
				editorHeight="500px"
				editorWidth="500px"
				onTextChange={onEditorCodeChange}
			></CodeEditor>
			<Button onClick={onButtonClick} label="実行" primary />
			<TextArea value={log} />
		</Main>
	)
}
export default MainContent;