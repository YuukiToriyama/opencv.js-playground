import React from "react";
import {
	Box,
	Grommet,
	Heading,
	Main,
	Paragraph,
	Text,
} from "grommet";
import {
	Cursor
} from "grommet-icons"

import CodeEditor from '../module/CodeEditor';
import ImportImages from '../module/ImportImages';
import { threshold } from '../util/sampleCodes';
import Console from "../module/Console";
import CustomButton from "../module/CustomButton";
import { sampleImages } from "../util/sampleImages";

export interface Log {
	method: string
	error?: Error
	object?: HTMLElement | object | string
}
const defaultLog: Log = {
	method: "log",
	object: "Welcome to OpenCV.js Playground! Your console.log outputs and errors will be printed here."
}

const MainContent: React.FunctionComponent = () => {
	// 入力されたコードはstateに保存しておく
	const [code, setCode] = React.useState(threshold);
	const onEditorCodeChange = (currentCode: string) => {
		setCode(currentCode);
	}
	// ログを画面上に出力する
	const [logs, setLogs] = React.useState<Log[]>([defaultLog]);
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
			<Heading>Welcome to OpenCV.js Playground</Heading>
			<Paragraph>ようこそOpenCV.js Playgroundへ！このサイトではOpenCV.jsを使った画像処理を試してみることができます。作成したコードをご自身の環境でも実行できるようにファイル一式をダウンロードすることもできます(準備中)。</Paragraph>
			<Grommet >
				{/* Step1 画像の読み込み */}
				<Box background="light-3" height="medium" key="step1">
					<Heading level="2">Import Images</Heading>
					<Paragraph>First, import images which you want to process.</Paragraph>
					<ImportImages onImageLoaded={() => { }} overflow={{ vertical: "scroll" }} defaultImages={sampleImages} />
				</Box>
				{/* Step2 コードの編集 */}
				<Box height="large" background="light-1" margin={{ top: "medium" }} key="step2">
					<Heading level="2">Edit Code</Heading>
					<Paragraph>Write code using OpenCV.js and execute it. You can display a result image on &lt;canvas id="output"/&gt;, so use cv.imshow("output", dst);. If you want to dedug your code, you can use console.log(). console.log puts the results out the window below.</Paragraph>
					<CodeEditor
						defaultValue={code}
						language="javascript"
						editorHeight="100%"
						editorWidth="100%"
						onTextChange={onEditorCodeChange}
					></CodeEditor>
				</Box>
				{/* Step3 オプションの設定とコードの実行 */}
				<Box background="light-2" margin={{ top: "medium" }} key="step3">
					<Heading level="2">Execute the Code</Heading>
					<Text>Run your code on click the button. The result image will be printed the canvas below. If the program has some error, they are printed to the console.</Text>
					<Box pad="small">
						<CustomButton icon={<Cursor size="large" />} text="Run Code" onClick={onButtonClick} />
						<canvas id="output" />
						<Console logs={logs} />
					</Box>
				</Box>
				{/* Step4  */}
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