import SocialIcons from "./SocialIcons";

function Footer() {
	let currentYear = new Date().getFullYear();

	return (
		<>
			<footer className="footer">
				<div className="footer__container">
					<p>© {currentYear} Studio Morte</p>
					<SocialIcons />
				</div>
			</footer>
		</>
	);
}

export default Footer;
