import React from "react";
import {
	Accordion,
	AccordionPanel,
	Box,
	Grommet,
	Table,
	TableBody,
	TableCell,
	TableRow
} from "grommet";
import {
	Console as ConsoleIcon,
	Alert
} from "grommet-icons";

import { Log } from "../layout/MainContent";

interface ConsoleProps {
	logs: Log[]
}
const Console: React.FunctionComponent<ConsoleProps> = (props) => {
	return (
		<Grommet>
			<Table>
				<TableBody>
					{props.logs.map(log => {
						switch (log.method) {
							case "log":
								return (
									<TableRow>
										<TableCell border="horizontal"><ConsoleIcon /></TableCell>
										<TableCell border="horizontal">
											{typeof log.object === "object" ? JSON.stringify(log.object) : log.object}
										</TableCell>
									</TableRow>
								);
							case "error":
								return (
									<TableRow>
										<TableCell><Alert /></TableCell>
										<TableCell>
											<Accordion>
												{log.error?.message}
												<AccordionPanel label="Error stack">
													{log.error?.stack}
												</AccordionPanel>
											</Accordion>
										</TableCell>
									</TableRow>
								)
						}
					})}
				</TableBody>
			</Table>
		</Grommet>
	)
}
export default Console;