'use client';

const brands = [
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
			<div>
				<label htmlFor="brands">Hersteller:</label>
			</div>
			<select
				name="brands"
				id="brands"
				// value={brandSelection}
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
