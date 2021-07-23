import './index.scss';

function MenuComponent() {
  return (
    <>
      <div className="left">
        <ul className="menu-list">
          <li className="menu-item">
            <img src="./assets/menu.svg" alt="menu" className="menu-icon" />
          </li>
          <li className="menu-item active">
            <a href="/index.html">
              <img src="./assets/transaction.svg" alt="transaction" />
              <p>Sổ giao dịch</p>
            </a>
          </li>
          <li className="menu-item">
            <a href="/bao-cao.html">
              <img src="./assets/report.svg" alt="report" />
              <p>Báo cáo</p>
            </a>
          </li>
          <li className="menu-item">
            <a href="/ngan-sach.html">
              <img src="./assets/budget.svg" alt="budget" />
              <p>Ngân sách</p>
            </a>
          </li>
          <li className="menu-item">
            <a href="/cua-hang.html">
              <img src="./assets/cart.svg" alt="cart" />
              <p>
                Cửa hàng
                <img src="./assets/extend.svg" alt="extend" />
              </p>
            </a>
          </li>
          <li className="menu-item">
            <a href="/tro-giup.html">
              <img src="./assets/help.svg" alt="help" />
              <p>
                Trợ giúp
                <img src="./assets/extend.svg" alt="extend" />
              </p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenuComponent;