import { Container, Image, Text } from "@chakra-ui/react";

export const DrinkItem = (props) => {
	return (
		<Container
			centerContent
			flexDir="row"
			justifyContent="space-between"
			padding={4}
			mb={8}
			backgroundColor={"green.700"}
			borderRadius="xl"
			boxShadow="dark-lg"
			_hover={{ boxShadow: "none" }}
			cursor="pointer"
			onClick={() => {
				props.onClick(props.drink);
			}}
		>
			<Image
				src={props.drink.imgUrl}
				fallback={props.drink.alt}
				border="2px"
				borderColor="yellow.400"
				borderRadius="full"
				boxSize={{ base: "100px", md: "100px", lg: "100px" }}
			/>
			<Text fontSize="xl" as="b" color="whiteAlpha.800">
				{props.drink.name}
			</Text>
			<Text color="whiteAlpha.700">€{props.drink.price}</Text>
		</Container>
	);
};
