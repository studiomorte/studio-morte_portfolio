import { Icon } from "@iconify/react";

function LinkBlock({ items }) {
	const linkItem = items.map((item) => (
		<a key={item.id} href={item.link} target="_blank" rel="noreferrer">
			<li>
				<Icon icon={item.icon} />
				<span>{item.title}</span>
			</li>
		</a>
	));

	return (
		<>
			<nav className="link-block">
				<ul>{linkItem}</ul>
			</nav>
		</>
	);
}

export default LinkBlock;
