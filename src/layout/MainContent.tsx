import React from "react";
import {
	Button,
	Box,
	Grommet,
	Heading,
	Main,
	Paragraph,
	Text,
	TextArea,
} from "grommet";

import CodeEditor from '../module/CodeEditor';
import ImportImages from '../module/ImportImages';
import { threshold } from '../util/sampleCodes';
import Console from "../module/Console";

export interface Log {
	method: string
	error?: Error
	object?: object | string
}

const MainContent: React.FunctionComponent = () => {
	// 入力されたコードはstateに保存しておく
	const [code, setCode] = React.useState(threshold);
	const onEditorCodeChange = (currentCode: string) => {
		setCode(currentCode);
		//console.log(currentCode)
	}
	// ログを画面上に出力する
	const [logs, setLogs] = React.useState<Log[]>([]);
	React.useEffect(() => {
		// console.log()を書き換えて結果を<TextArea/>に表示する
		console.log = (args: string | object) => {
			let log: Log = {
				method: "log",
				object: args
			}
			setLogs(prevState => [log].concat(prevState));
		}
		// window.onerrorをconsole.error()に流しconsole-feedで表示されるようにする
		window.onerror = (message, url, lineNumber, columnNumber, error) => {
			if (error !== undefined) {
				const log: Log = {
					method: "error",
					error: error
				}
				setLogs(prevState => [log].concat(prevState));
				//console.error(logs);
			}
		}
	}, []);
	// コードを実行
	const onButtonClick = () => {
		const executeCode = new Function(code);
		executeCode();
	}
	return (
		<Main pad="large">
			<Heading>Main content</Heading>
			<Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
			<Grommet >
				{/* Step1 画像の読み込み */}
				<Box background="light-3" height="medium" key="step1">
					<Heading level="2">Import Images</Heading>
					<Paragraph>First, import images which you want to process.</Paragraph>
					<ImportImages onImageLoaded={() => { }} overflow={{ vertical: "scroll" }} />
				</Box>
				{/* Step2 コードの編集 */}
				<Box height="large" background="light-1" margin={{ top: "medium" }} key="step2">
					<Heading level="2">Edit Code</Heading>
					<Paragraph>Write code using OpenCV.js and execute it. If you want to dedug your code, you can use console.log(). console.log puts the results out the window below.</Paragraph>
					<CodeEditor
						defaultValue={code}
						language="javascript"
						editorHeight="100%"
						editorWidth="100%"
						onTextChange={onEditorCodeChange}
					></CodeEditor>
				</Box>
				{/* Step3 オプションの設定とコードの実行 */}
				<Box background="brand" margin={{ top: "medium" }} key="step3">
					<Heading level="2">Configure Options then Execute</Heading>
					<Text>Set options and execute your code.</Text>
					<Button onClick={onButtonClick} label="実行" primary />
					{/* 表かなにかを使ってコンソールを表現する */}
					<Console logs={logs} />
				</Box>
				{/* Area3 */}
				{/*
				<Box background="light-1" margin={{ top: "medium" }} key="step4">
					<Heading level="2">Download Your Code</Heading>
					<Text>Get yourCode.js with index.html that display the result.</Text>
				</Box>
				*/}
			</Grommet>
		</Main>
	)
}
export default MainContent;