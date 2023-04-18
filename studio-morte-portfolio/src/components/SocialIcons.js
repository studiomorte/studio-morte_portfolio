import { Icon } from "@iconify/react";

function SocialIcons() {
	return (
		<>
			<div className="socials__container">
				<a
					href="https://www.linkedin.com/in/studiomorte/"
					className="socials__icon"
				>
					<Icon icon="brandico:linkedin" />
				</a>
				<a href="https://github.com/studiomorte" className="socials__icon">
					<Icon icon="mingcute:github-fill" />
				</a>
				<a href="https://codepen.io/studiomorte" className="socials__icon">
					<Icon icon="ph:codepen-logo-fill" />
				</a>
				<a
					href="https://www.instagram.com/studiomorte/"
					className="socials__icon"
				>
					<Icon icon="ant-design:instagram-filled" />
				</a>
				<a href="https://medium.com/@studiomorte" className="socials__icon">
					<Icon icon="bi:medium" />
				</a>
			</div>
		</>
	);
}

export default SocialIcons;
