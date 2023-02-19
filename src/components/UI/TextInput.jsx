import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, ...props }) => {
	return (
		<form>
			<Input
				textAlign={"center"}
				color={"whiteAlpha.800"}
				_placeholder={{ color: "whiteAlpha.500" }}
				borderColor={"green.600"}
				focusBorderColor={"whiteAlpha.800"}
				onChange={onChange}
				{...props}
			/>
		</form>
	);
};
