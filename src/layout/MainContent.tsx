import React from "react";
import {
	Button,
	Box,
	Grid,
	Grommet,
	Heading,
	Main,
	Paragraph,
	ResponsiveContext,
	TextArea,
} from "grommet";
import { grommet } from "grommet/themes"
import { deepMerge } from "grommet/utils"

import CodeEditor from '../module/CodeEditor';
import ImportImages from '../module/ImportImages';
import { helloWorld } from '../util/sampleCodes';

const MainContent: React.FunctionComponent = () => {
	// レスポンシブ対応
	const size = React.useContext(ResponsiveContext);
	const customBreakpoints = deepMerge(grommet, {
		global: {
			breakpoints: {
				small: {
					value: 600,
				},
				medium: {
					value: 900,
				},
				large: {
					value: 3000,
				},
			},
		},
	});
	const fixedGridColumns: { [size: string]: any } = {
		small: ['auto'],
		medium: ['auto', 'auto'],
		large: ['auto', 'auto', 'auto'],
		xlarge: ['auto', 'auto', 'auto'],
	};
	const fixedGridRows: { [size: string]: any } = {
		small: ['flex', 'flex', 'flex'],
		medium: ['flex', 'flex'],
		large: ['flex'],
		xlarge: ['flex'],
	};
	const fixedGridAreas: { [size: string]: any } = {
		small: [
			{ name: 'description', start: [0, 0], end: [0, 0] },
			{ name: 'editor', start: [0, 1], end: [0, 1] },
			{ name: 'result', start: [0, 2], end: [0, 2] },
		],
		medium: [
			{ name: 'description', start: [0, 0], end: [1, 0] },
			{ name: 'editor', start: [0, 1], end: [0, 1] },
			{ name: 'result', start: [1, 1], end: [1, 1] },
		],
		large: [
			{ name: 'description', start: [0, 0], end: [0, 0] },
			{ name: 'editor', start: [1, 0], end: [1, 0] },
			{ name: 'result', start: [2, 0], end: [2, 0] },
		],
		xlarge: [
			{ name: 'description', start: [0, 0], end: [0, 0] },
			{ name: 'editor', start: [1, 0], end: [1, 0] },
			{ name: 'result', start: [2, 0], end: [2, 0] },
		],
	};
	// 入力されたコードはstateに保存しておく
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
		const executeCode = new Function(code);
		executeCode();
	}
	return (
		<Main pad="large">
			{/*
			<Heading>Main content</Heading>
			<Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
			*/}
			<Grommet theme={customBreakpoints}>
				<Box background="light-3" height="medium">
					<ImportImages onImageLoaded={() => { }} overflow={{ vertical: "scroll" }} />
				</Box>
				<Grid
					areas={fixedGridAreas[size]}
					rows={fixedGridRows[size]}
					columns={fixedGridColumns[size]}
					gap="small"
				>
					<Box gridArea="description" background="dark-3" >
						<Heading>hoge</Heading>
					</Box>
					<Box gridArea="editor" background="neutral-2">
						<CodeEditor
							defaultValue={code}
							language="javascript"
							editorHeight="100%"
							editorWidth="100%"
							onTextChange={onEditorCodeChange}
						></CodeEditor>
					</Box>
					<Box gridArea="result" background="neutral-2">
						<Button onClick={onButtonClick} label="実行" primary />
						<TextArea value={log} />
					</Box>
				</Grid>
			</Grommet>
		</Main>
	)
}
export default MainContent;