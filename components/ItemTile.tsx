import { MPhoneTile } from '@/types/itemTypes';
import { getFormattedPriceInrToEur } from '@/lib/helpers';

type Props = MPhoneTile;

export default function ItemTile({
	model,
	brand,
	operating_system,
	resolution_x,
	resolution_y,
	price_INR,
}: Props) {
	return (
		<article className="tile">
			<strong> {model} </strong>
			<p> {brand} </p>
			<dl className="tile__spec">
				<dt> Betriebssystem: </dt>
				<dd> {operating_system} </dd>
				<dt> Auflösung: </dt>
				<dt> {`${resolution_x} x ${resolution_y}`} </dt>
			</dl>
			<p> {getFormattedPriceInrToEur(price_INR)} </p>
		</article>
	);
}
