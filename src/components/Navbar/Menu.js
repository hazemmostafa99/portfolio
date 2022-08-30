import "./Menu.scss";
import links from "./links";

const Menu = ({ openmenu, setOpenMenu }) => {
  return (
    <div className={"menu " + (openmenu && "active")}>
      <ul>
        {links.map((item) => (
          <li onClick={() => setOpenMenu(false)} key={item.id}>
            <a href={item.itemUrl}>{item.item} </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
