import { TextInput } from "./UI/TextInput.jsx";
import { useState } from "react";
import { DrinkItems } from "./DrinkItems.jsx";
import { availableDrinks } from "../utils/data.js";

export const DrinkSearch = ({ onSearch }) => {
	const [searchField, setSearchField] = useState("");

	const handleChange = (event) => {
		event.preventDefault();
		setSearchField(event.target.value);
	};

	const matchedDrinks = availableDrinks.filter((drink) => {
		return drink.name.toLowerCase().includes(searchField.toLowerCase());
	});

	return (
		<>
			<TextInput
				onChange={handleChange}
				value={searchField}
				w={"300px"}
				mb={12}
				placeholder="Search for a drink"
			/>
			<DrinkItems onClick={onSearch} drinks={matchedDrinks} />
		</>
	);
};
