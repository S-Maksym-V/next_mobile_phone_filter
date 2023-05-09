import { ChangeEvent } from 'react';
import type { SortOptions } from '@/types/itemTypes';

type Props = {
	sortOption: SortOptions;
	setSortOption: React.Dispatch<React.SetStateAction<SortOptions>>;
	sortOrder: boolean;
	setSortOrder: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sort({
	sortOption,
	setSortOption,
	sortOrder,
	setSortOrder,
}: Props) {
	// console.log(sortOrder);

	function onChangeDropdown(e: ChangeEvent<HTMLSelectElement>) {
		if (e.target.value !== ('name' || 'brand' || 'price_INR' || 'phone_id'))
			return;

		setSortOption(e.target.value);
	}

	return (
		<div>
			<label htmlFor="sortOption" className="sidebar-page__sidebar__label">
				Sortierung nach:{' '}
			</label>
			<select
				name="brands"
				id="brands"
				value={sortOption}
				onChange={onChangeDropdown}
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
