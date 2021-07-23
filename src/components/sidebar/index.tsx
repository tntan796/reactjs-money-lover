import './index.scss';
function SideBarComponent() {
    return (
        <div className="sidebar">
            <div className="menu-action">
                <img src="./assets/menu.svg" alt="menu" className="menu-icon" />
            </div>
            <div className="account-wrapper">
                <div className="logo">
                    <img src="./assets/badge.svg" alt="badge" />
                </div>
                <div className="account-name">
                    Tantanotnt96
                </div>
                <div className="account-email">
                    tantanotnt96@gmail.com
                </div>
            </div>
            <ul className="menu-list">
                <li>
                    <a href="/quan-li-tai-khoan.html">
                        <img src="./assets/person.svg" alt="person" className="icon" />
                        <div className="menu-info">
                            <label>Quản lý tài khoản</label>
                            <img src="./assets/right-chevron.svg" alt="chevron" className="chevron" />
                        </div>
                    </a>
                </li>
                <li>
                    <a href="./vi-cua-toi.html">
                        <img src="./assets/wallet.svg" alt="wallet" className="icon" />
                        <div className="menu-info">
                            <label>Ví của tôi</label>
                            <img src="./assets/right-chevron.svg" alt="chevron" className="chevron" />
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/nhom.html">
                        <img src="./assets/package.svg" alt="package" className="icon" />
                        <div className="menu-info">
                            <label>Nhóm</label>
                            <img src="./assets/right-chevron.svg" alt="chevron" className="chevron" />
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/lien-ket-ngan-hang.html">
                        <img src="./assets/link.svg" alt="link" className="icon" />
                        <div className="menu-info">
                            <label>Liên kết ngân hàng</label>
                            <img src="./assets/right-chevron.svg" alt="chevron" className="chevron" />
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBarComponent;