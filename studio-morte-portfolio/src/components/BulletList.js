import bullet from "./../images/icons/bullet.svg";

function BulletList({ items }) {
  const bulletPoint = items.map((item) => (
    <li key={item.id}>
      <img src={bullet} alt="bullet point" />
      <span>{item.copy}</span>
    </li>
  ));

  return (
    <>
      <ul className="written">{bulletPoint}</ul>
    </>
  );
}

export default BulletList;
