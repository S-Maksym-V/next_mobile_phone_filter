'use client';

const brands = [
	'10.or',
	'Acer',
	'Alcatel',
	'Apple',
	'Samsung',
	'LG',
	'Meizu',
	'Motorola',
	'Itel',
	'Vivo',
	'Panasonic',
	'Razer',
	'HTC',
	'Xiaomi',
];

type Props = {
	setBrandSelection: React.Dispatch<React.SetStateAction<string>>;
	brandSelection: string;
};

export default function BrandFilter({
	setBrandSelection,
	brandSelection,
}: Props) {
	return (
		<div>
			<label htmlFor="brands" className="sidebar-page__sidebar__label">
				Hersteller:
			</label>
			<select
				name="brands"
				id="brands"
				value={brandSelection}
				onChange={(e) => setBrandSelection(e.target.value)}
			>
				<option value=""> --Alle-- </option>
				{brands.map((brand) => (
					<option key={brand} value={brand}>
						{brand}
					</option>
				))}
			</select>
		</div>
	);
}
