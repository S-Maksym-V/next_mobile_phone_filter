import { MPhoneTile } from '@/types/itemTypes';
import { getFormattedPriceInrToEur } from '@/lib/helpers';
import Link from 'next/link';

type Props = MPhoneTile;

export default function ItemTile({
	phone_id,
	model,
	brand,
	operating_system,
	resolution_x,
	resolution_y,
	price_INR,
}: Props) {
	return (
		<Link href={`/${phone_id}`} style={{ textDecoration: 'none' }}>
			<article className="tile">
				<strong className="tile__model"> {model} </strong>
				<p> {brand} </p>
				<dl className="tile__spec">
					<dt> Betriebssystem: </dt>
					<dd> {operating_system} </dd>
					<dt> Auflösung: </dt>
					<dd> {`${resolution_x} x ${resolution_y}`} </dd>
				</dl>
				{/* ursprüngliche Preisangaben aus Dataset sind in indischen Rupien, durch getFormatted...-Funktion in EUR übersetzt  */}
				<strong> {getFormattedPriceInrToEur(price_INR)} </strong>
			</article>
		</Link>
	);
}
