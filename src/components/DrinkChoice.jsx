import {
	Heading,
	Text,
	Image,
	Center,
	Flex,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@chakra-ui/react";
import { Button } from "./UI/Button.jsx";

export const DrinkChoice = ({ drink, onClick }) => {
	const { name: drinkName, imgUrl: drinkImgUrl, alt: drinkAlt } = drink;
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Center flexDir={"column"} height={"100vh"} backgroundColor={"yellow.500"}>
			<Heading fontSize="4xl" as="b" color="whiteAlpha.800" p="8" mb="8">
				Your choice: {drinkName}
			</Heading>
			<Image
				src={drinkImgUrl}
				fallback={drinkAlt}
				border="2px"
				borderColor="green.600"
				borderRadius="full"
				boxSize={{ base: "200px", md: "200px", lg: "250px" }}
			/>
			<Text fontSize="xl" as="" color="whiteAlpha.800" p="8" mt="8">
				Your {drinkName} will be rady in few minutes
			</Text>
			<Flex>
				<Button w={"100px"} mr={4} onClick={onOpen} text={"Confirm"} />
				<Button
					w={"100px"}
					mr={4}
					text={"Back"}
					onClick={() => {
						onClick();
					}}
				/>
			</Flex>
			<Modal
				flexDir={{ base: "column", sm: "row" }}
				size={{ base: "full", sm: "lg" }}
				isCentered
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent bg={"yellow.500"} color={"whiteAlpha.800"}>
					<ModalHeader
						mt={{ base: "8", sm: "0" }}
						fontWeight="bold"
						fontSize={{ base: "xl", sm: "xl", md: "3xl", lg: "4xl" }}
					>
						Confirm your order!
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}>
						Are you sure you want to order {drinkName}?
					</ModalBody>

					<ModalFooter flexDir={"row"} justifyContent={"space-evenly"}>
						<Button
							w={"80px"}
							mb={{ base: "8", sm: "0" }}
							text={"Confirm"}
							onClick={onClose}
						/>
						<Button
							w={"80px"}
							mb={{ base: "8", sm: "0" }}
							text={"Cancel"}
							backgroundColor={"red.500"}
							onClick={() => {
								console;
								onClick();
							}}
						/>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Center>
	);
};
