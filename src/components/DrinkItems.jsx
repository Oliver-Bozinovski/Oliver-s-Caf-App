import { DrinkItem } from "./DrinkItem";

export const DrinkItems = ({ drinks, onClick }) => {
	return (
		<div className="drink-items">
			{drinks.map((drink) => (
				<DrinkItem drink={drink} key={drink.id} onClick={onClick} mb={4} />
			))}
		</div>
	);
};
