import { FiTwitter, FiFacebook } from 'react-icons/fi';

export default function Footer() {
	return (
		<footer className="site-footer">
			<small>&copy; MS & Cimdata {new Date().getFullYear()}</small>
		</footer>
	);
}
