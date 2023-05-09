export function getFormattedPriceInrToEur(
	price: number,
	currencySymbol = ' €'
) {
	const formattedPrice =
		(price * 0.011).toFixed(2).replace('.', ',') + currencySymbol;
	// wo 0.011 ist aktueller Kurs INR (Rupien) in EUR

	return formattedPrice;
}
