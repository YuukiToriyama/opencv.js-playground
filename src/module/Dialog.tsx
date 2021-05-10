import React from "react";
import {
	Button,
	ButtonProps,
	Grommet,
	Layer,
} from "grommet";
import {
	Favorite,
	FormClose,
} from "grommet-icons";

/* Usage
import Dialog from "src/module/Dialog.tsx";
import {
	Favorite
} from "grommet-icons";
return (
	<Dialog icon={<Favorite />}>
		<p>hoge</p>
	</Dialog>
)
*/
interface DialogProps {
	children: React.ReactChild,
	icon?: ButtonProps["icon"]
}
const Dialog: React.FunctionComponent<DialogProps> = (props) => {
	const [open, setOpen] = React.useState(false);
	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);
	return (
		<Grommet>
			<Button icon={props.icon || <Favorite />} onClick={onOpen} />
			{open && (
				<Layer
					full={false}
					position="center"
					onClickOutside={onClose}
					onEsc={onClose}
				>
					<Button icon={<FormClose />} onClick={onClose} />
					{props.children}
				</Layer>
			)}
		</Grommet>
	)
}
export default Dialog;