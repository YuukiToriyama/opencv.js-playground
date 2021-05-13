import React from "react";
import {
	Button,
	Grommet,
	Layer,
} from "grommet";
import {
	FormClose,
} from "grommet-icons";


interface DialogProps {
	content: React.ReactElement,
	children: React.ReactElement,
	onClicked?: Function
}
const Dialog: React.FunctionComponent<DialogProps> = (props) => {
	const [open, setOpen] = React.useState(false);
	const onOpen = () => {
		new Promise((resolve, reject) => {
			setOpen(true);
			resolve("");
		}).then(() => {
			(props.onClicked != undefined) && props.onClicked();
		});
	}
	const onClose = () => setOpen(false);
	return (
		<Grommet>
			{React.cloneElement(props.children, { onClick: onOpen })}
			{open && (
				<Layer
					full={false}
					position="center"
					onClickOutside={onClose}
					onEsc={onClose}
				>
					<Button icon={<FormClose />} onClick={onClose} />
					{props.content}
				</Layer>
			)}
		</Grommet>
	)
}
export default Dialog;