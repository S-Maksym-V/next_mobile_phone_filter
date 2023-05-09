type Props = {
	sortOption: 'name' | 'brand' | 'price_INR' | 'phone_id';
	setSortOption: React.Dispatch<
		React.SetStateAction<'name' | 'brand' | 'price_INR' | 'phone_id'>
	>;
	sortOrder: boolean;
	setSortOrder: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sort({
	sortOption,
	setSortOption,
	sortOrder,
	setSortOrder,
}: Props) {
	console.log(sortOrder);

	return (
		<div>
			<label htmlFor="sortOption" className="sidebar-page__sidebar__label">
				Sortierung nach:{' '}
			</label>
			<select
				name="brands"
				id="brands"
				value={sortOption}
				onChange={(e) => setSortOption(e.target.value)}
			>
				<option value="phone_id"> --kein-- </option>
				<option value="name"> Name </option>
				<option value="brand"> Hersteller </option>
				<option value="price_INR"> Preis </option>
			</select>
			<div className="sidebar-page__sidebar__label">Sortierfolge:</div>
			<div>
				<label>
					<input
						type="radio"
						name="sortOrder"
						value="ascending"
						onChange={() => setSortOrder(true)}
						checked={sortOrder === true}
					/>{' '}
					aufsteigend
				</label>
			</div>
			<div>
				<label>
					<input
						type="radio"
						name="sortOrder"
						value="descending"
						onChange={() => setSortOrder(false)}
						checked={sortOrder === false}
					/>{' '}
					absteigend
				</label>
			</div>
		</div>
	);
}
