import './index.scss';
import {
  Link, useRouteMatch
} from "react-router-dom";

interface MenuType {
  name: string;
  icon: string;
  alt: string;
  path: string;
  extend: boolean;
}

function MenuComponent() {


  const menus: MenuType[] = [
    {
      name: 'Sổ giao dịch',
      icon: './assets/transaction.svg',
      alt: 'transaction',
      path: '/transaction',
      extend: false
    },
    {
      name: 'Báo cáo',
      icon: './assets/report.svg',
      alt: 'report',
      path: '/report',
      extend: false
    },
    {
      name: 'Ngân sách',
      icon: './assets/budget.svg',
      alt: 'budget',
      path: '/budget',
      extend: false
    },
    {
      name: 'Cửa hàng',
      icon: './assets/cart.svg',
      alt: 'market',
      path: '/market',
      extend: true
    },
    {
      name: 'Trợ giúp',
      icon: './assets/help.svg',
      alt: 'help',
      path: '/help',
      extend: true
    }
  ];

  const menuElm = menus.map((menu, index) => (
    <MyCustomLink
        key = {index}
        name = {menu.name}
        path = {menu.path}
        icon = {menu.icon}
        alt = {menu.alt}
        extend = {menu.extend}
    ></MyCustomLink>
  ))

  function MyCustomLink({ name, path, icon, alt, activeOnlyWhenExact = true, extend = false}: any) {
    let match = useRouteMatch({
      path: path,
      exact: activeOnlyWhenExact
    });
  
    return (
      <li className="menu-item">
        <Link className={match ? "menu-item active" : "menu-item"} to={path}>
          <img src={icon} alt={alt} />
          <p>
              {name}
              {extend ? <img src="./assets/extend.svg" alt="extend"/> : null }
          </p>
        </Link>
      </li>
    );
  }

  return (
    <>
      <div className="left">
        <ul className="menu-list">
          <li className="menu-item">
            <img src="./assets/menu.svg" alt="menu" className="menu-icon" />
          </li>
          {menuElm}
        </ul>
      </div>
    </>
  );
}

export default MenuComponent;