export function getFormattedPriceInrToEur(
	price: number,
	currencySymbol = ' €'
) {
	const formattedPrice =
		(price * 0.011).toFixed(2).replace('.', ',') + currencySymbol;

	return formattedPrice;
}
