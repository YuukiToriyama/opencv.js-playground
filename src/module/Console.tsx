import React from "react";
import {
	Accordion,
	AccordionPanel,
	Box,
	Grommet,
	GrommetProps,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Text
} from "grommet";
import {
	Console as ConsoleIcon,
	Alert,
	FormUp,
	FormDown
} from "grommet-icons";

import { Log } from "../layout/MainContent";

const accordionTheme: GrommetProps["theme"] = {
	accordion: {
		border: undefined,
		icons: {
			collapse: FormUp,
			expand: FormDown
		}
	}
}

interface ConsoleProps {
	logs: Log[]
}
const Console: React.FunctionComponent<ConsoleProps> = (props) => {
	return (
		<Grommet theme={accordionTheme}>
			<Box>
				<Table>
					<TableBody>
						{props.logs.map(log => {
							switch (log.method) {
								case "log":
									return (
										<TableRow key={Math.random().toString(32).substring(2)}>
											<TableCell border="horizontal"><ConsoleIcon /></TableCell>
											<TableCell border="horizontal">
												<Text>{(log.object instanceof HTMLElement) ? log.object.outerHTML : log.object?.toString()}</Text>
											</TableCell>
										</TableRow>
									);
								case "error":
									return (
										<TableRow key={Math.random().toString(32).substring(2)}>
											<TableCell border="horizontal"><Alert /></TableCell>
											<TableCell border="horizontal">
												<Accordion>
													<Text size="small">{log.error?.message}</Text>
													<AccordionPanel label={<Text>Error stack</Text>}>
														<Text size="small">{log.error?.stack}</Text>
													</AccordionPanel>
												</Accordion>
											</TableCell>
										</TableRow>
									)
							}
						})}
					</TableBody>
				</Table>
			</Box>
		</Grommet>
	)
}
export default Console;