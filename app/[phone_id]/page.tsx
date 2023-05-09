import { supabase } from '@/lib/supabaseClient';
import { getFormattedPriceInrToEur } from '@/lib/helpers';
import Link from 'next/link';

type Props = {
	params: {
		phone_id: string;
	};
};

export default async function page({ params: { phone_id } }: Props) {
	const { data } = await supabase
		.from('MobilePhones')
		.select()
		.eq('phone_id', phone_id)
		.limit(1)
		.single();

	console.log(data);

	return (
		<div className="single-page">
			<Link href="/"> zurück zum Übersicht </Link>
			<h3> {data?.name} </h3>
			<h4 className="single-page__brand"> {data?.brand} </h4>
			<dl>
				<dt> Betriebssystem: </dt>
				<dd> {data?.operating_system} </dd>
				<dt> Auflösung: </dt>
				<dd> {`${data?.resolution_x} x ${data?.resolution_y}`} </dd>
				<dt> Bildschirmgröße: </dt>
				<dd> {data?.screen_size_inches + ' Zölle'} </dd>
				<dt> Akku-Kapazität: </dt>
				<dd> {data?.battery_capacity_mAh} </dd>
				<dt> Processor: </dt>
				<dd> {data?.processor + ' Kerne'} </dd>

				<dt> Arbeitsspeicher (RAM):</dt>
				<dd> {data?.ram_MB + ' MB'} </dd>

				<dt> Datenspeicher: </dt>
				<dd> {data?.internal_storage_GB + ' GB'} </dd>

				<dt> Rückkamera: </dt>
				<dd> {data?.rear_camera + ' Mpx'} </dd>

				<dt> Frontkamera: </dt>
				<dd> {data?.front_camera + ' Mpx'} </dd>

				<dt> SIM-Anzahl: </dt>
				<dd> {data?.number_of_SIMs} </dd>
			</dl>
			<strong>
				{/* ursprüngliche Preisangaben aus Dataset sind in indischen Rupien, durch getFormatted...-Funktion in EUR übersetzt  */}
				Price: {getFormattedPriceInrToEur(data?.price_INR ?? 0)}
			</strong>
		</div>
	);
}
