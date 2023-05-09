'use client';

import BrandFilter from '@/components/BrandFilter';
import ItemTile from '@/components/ItemTile';
import { supabase } from '@/lib/supabaseClient';
import type { PhoneData } from '@/types/itemTypes';
import { useEffect, useState } from 'react';

export default function Home() {
	const [brandSelection, setBrandSelection] = useState<string>('');
	const [phoneData, setPhoneData] = useState<PhoneData[] | null>([]);

	useEffect(() => {
		async function fetchFromSupabase() {
			let result: PhoneData[] = [];

			if (brandSelection) {
				const { data } = await supabase
					.from('MobilePhones')
					.select()
					.eq('brand', brandSelection);
				result = data ?? [];
			} else {
				const { data } = await supabase.from('MobilePhones').select();
				result = data ?? [];
			}

			setPhoneData(result);
		}
		fetchFromSupabase();
	}, [brandSelection]);

	// console.log(JSON.stringify(data, null, 1));
	console.log(brandSelection);

	return (
		<div className="sidebar-page">
			<main className="sidebar-page__main">
				<div className="item-set">
					{phoneData?.map((item) => (
						/* @ts-ignore */
						<ItemTile key={item.phone_id} {...item} />
					))}
				</div>
			</main>
			<aside className="sidebar-page__sidebar">
				<BrandFilter
					brandSelection={brandSelection}
					setBrandSelection={setBrandSelection}
				/>
			</aside>
		</div>
	);
}
