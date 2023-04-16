import { Icon } from "@iconify/react";

function SocialIconsFooter() {
	return (
		<>
			<div className="footer__socials-container">
				<a
					href="https://www.instagram.com/studiomorte/"
					className="social_icon"
				>
					<Icon icon="ant-design:instagram-filled" width="32px" color="#fff" />
				</a>
				<a
					href="https://www.linkedin.com/in/studiomorte/"
					className="social_icon"
				>
					<Icon icon="brandico:linkedin" width="25px" color="#fff" />
				</a>
				<a href="https://medium.com/@studiomorte" className="social_icon">
					<Icon icon="bi:medium" width="35px" color="#fff" />
				</a>
				<a href="https://github.com/studiomorte" className="social_icon">
					<Icon icon="mingcute:github-fill" width="30px" color="#fff" />
				</a>
				<a href="https://codepen.io/studiomorte" className="social_icon">
					<Icon icon="ph:codepen-logo-fill" width="34px" color="#fff" />
				</a>
			</div>
		</>
	);
}

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer__container">
					<p>© 2022 Studio Morte</p>
					<SocialIconsFooter />
				</div>
			</footer>
		</>
	);
}

export default Footer;
