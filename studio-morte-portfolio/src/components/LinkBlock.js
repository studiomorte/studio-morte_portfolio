import { Icon } from "@iconify/react";

function LinkBlock({ items }) {
  const linkItem = items.map((item) => (
    <a href={item.link} key={item.id}>
      <li>
        <Icon icon={item.icon} />
        <span>{item.title}</span>
      </li>
    </a>
  ));

  return (
    <>
      <nav className="links-block">
        <ul>{linkItem}</ul>
      </nav>
    </>
  );
}

export default LinkBlock;
