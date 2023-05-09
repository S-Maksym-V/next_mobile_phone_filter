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
					<dt> {`${resolution_x} x ${resolution_y}`} </dt>
				</dl>
				<p> {getFormattedPriceInrToEur(price_INR)} </p>
			</article>
		</Link>
	);
}
