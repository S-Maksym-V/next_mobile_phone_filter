'use client';

import BrandFilter from '@/components/BrandFilter';
import ItemTile from '@/components/ItemTile';
import Sort from '@/components/Sort';
import { useToggle } from '@/lib/hooks/useToggle';
import { supabase } from '@/lib/supabaseClient';
import type { PhoneData } from '@/types/itemTypes';
import { useEffect, useState } from 'react';

import type { SortOptions } from '@/types/itemTypes';

export default function Home() {
	const [brandSelection, setBrandSelection] = useState<string>('');
	const [phoneData, setPhoneData] = useState<PhoneData[] | null>([]);
	const [sortOption, setSortOption] = useState<SortOptions>('phone_id');
	const [sortOrder, , setSortOrder] = useToggle(true);

	useEffect(() => {
		if (sortOption === 'phone_id') {
			setSortOrder(true);
		}

		async function fetchFromSupabase() {
			let result: PhoneData[] = [];
			if (brandSelection) {
				const { data } = await supabase
					.from('MobilePhones')
					.select()
					.eq('brand', brandSelection)
					.order('brand', { ascending: sortOrder });
				result = data ?? [];
			} else {
				const { data } = await supabase
					.from('MobilePhones')
					.select()
					.order(`${sortOption}`, { ascending: sortOrder });
				result = data ?? [];
			}

			setPhoneData(result);
		}
		fetchFromSupabase();
	}, [brandSelection, sortOption, sortOrder]);

	// console.log(JSON.stringify(data, null, 1));
	// console.log(sortOrder);

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
				<div className="sidebar-page__sidebar__modifier">
					<strong className="sidebar-page__sidebar__modifier__name">
						Sortierung:
					</strong>
					<Sort
						sortOption={sortOption}
						setSortOption={setSortOption}
						sortOrder={sortOrder}
						setSortOrder={setSortOrder}
					/>
				</div>
				<div className="sidebar-page__sidebar__modifier">
					<strong className="sidebar-page__sidebar__modifier__name">
						Filter:
					</strong>
					<BrandFilter
						brandSelection={brandSelection}
						setBrandSelection={setBrandSelection}
					/>
				</div>
			</aside>
		</div>
	);
}
