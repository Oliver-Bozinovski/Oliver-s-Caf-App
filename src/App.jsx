import { useState } from "react";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
import { Box, SimpleGrid, Heading } from "@chakra-ui/react";

export const App = () => {
	const greeting = "Welcome @ Oliver's café";
	const description = "We serve the best coffee in town !!!";
	const [userDrink, setUserDrink] = useState();

	return (
		<Box height={"100%"} backgroundColor={"yellow.500"} textAlign="center">
			{userDrink ? undefined : (
				<SimpleGrid
					flexDir={{ base: "column", sm: "row" }}
					justifyContent="center"
					size={{ base: "full", sm: "lg" }}
					p={{ base: "2", sm: "2", md: "4", lg: "8" }}
				>
					<Heading
						size={{ base: "3xl", sm: "3xl", md: "4xl", lg: "5xl" }}
						padding={{ base: "2", sm: "2", md: "4", lg: "8" }}
						fontSize={{ base: "l", sm: "l", md: "4xl", lg: "5xl" }}
						color={"green.700"}
						shadow={"dark-lg"}
						borderRadius={"xl"}
					>
						{greeting}
					</Heading>
					<Heading
						my={8}
						p={4}
						fontFamily={("fantasy", "cursive")}
						color={"whiteAlpha.800"}
					>
						{description}
					</Heading>
					<DrinkSearch onSearch={setUserDrink} />
				</SimpleGrid>
			)}
			{userDrink && <DrinkChoice drink={userDrink} onClick={setUserDrink} />}
		</Box>
	);
};
