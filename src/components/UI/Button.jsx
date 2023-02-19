import { Button as Btn } from "@chakra-ui/react";

export const Button = ({ text, onClick, ...props }) => {
	return (
		<Btn
			backgroundColor={"green.600"}
			color={"whiteAlpha.900"}
			{...props}
			onClick={onClick}
		>
			{text}
		</Btn>
	);
};
