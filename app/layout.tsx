/* Globale Styles, die auf allen Seiten geladen werden.
Wenn man größere Mengen spezifischer Styles hat, kann man
auch in einzelnen page- bzw. Komponenten-Dateien css oder
scss-Dateien importieren.
*/
import '../sass/style.scss';
// import SupabaseProvider from './supabase-provider';

// https://beta.nextjs.org/docs/api-reference/metadata
export const metadata = {
	title: 'MPhone Filter',
	description: 'Abschlussprojekt MS JS4',
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
	// themeColor: [
	//   { color: 'hotpink', media: '(prefers-color-scheme: light)' },
	//   { color: 'purple', media: '(prefers-color-scheme: dark)' },
	// ],
	icons: [
		{
			url: '/favicon.svg',
			type: 'image/svg+xml',
		},
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
