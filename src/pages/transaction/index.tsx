import { useState } from 'react';
import HeaderComponent from '../../components/header';
import './index.scss';
function TransactionPage() {

    const [isShowDetail, setIsShowDetail] = useState(false)

    return (
        <>
            <HeaderComponent></HeaderComponent>
            <div className="transaction">
                <div className={isShowDetail ? "transaction-left active" : "transaction-left"}>
                    <ul className="date-range-wrapper">
                        <li>Tháng trước</li>
                        <li className="active">Tháng này</li>
                        <li>Tương lai</li>
                    </ul>
                    <div className="transaction-overview">
                        <div className="transaction-overview-item inflow">
                            <label>Tiền vào</label>
                            <span>17,938,400</span>
                        </div>
                        <div className="transaction-overview-item outflow">
                            <label>Tiền vào</label>
                            <span>17,938,400</span>
                        </div>
                        <div className="transaction-overview-item total-amount">
                            <label />
                            <span>+15,503,626</span>
                        </div>
                    </div>
                    <div className="view-report">
                        Xem báo cáo cho giai đoạn này
                    </div>
                    <div className="transaction-list">
                        <div className="transaction-item" onClick={() => setIsShowDetail(true)}>
                            <div className="transaction-header">
                                <div className="date-view">
                                    <div className="view-day">
                                        16
                                    </div>
                                    <div className="view-date">
                                        <div className="day">Thứ sáu</div>
                                        <div className="months">Tháng bảy 2021</div>
                                    </div>
                                </div>
                                <div className="amount-view">
                                    <div className="amount">-578,000</div>
                                </div>
                            </div>
                            <div className="transaction-detail">
                                <div className="item">
                                    <div className="item-image">
                                        <img src="./assets/mobile.png" alt="mobile" />
                                    </div>
                                    <div className="title">
                                        <div className="title-top">Thiết bị điện tử</div>
                                        <div className="title-bot">
                                            2 dây Vga
                                        </div>
                                    </div>
                                    <div className="amount">
                                        50,000
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-image">
                                        <img src="./assets/mobile.png" alt="mobile" />
                                    </div>
                                    <div className="title">
                                        <div className="title-top">Thiết bị điện tử</div>
                                        <div className="title-bot">
                                            2 dây Vga
                                        </div>
                                    </div>
                                    <div className="amount">
                                        50,000
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="transaction-item" onClick={() => setIsShowDetail(true)}>
                            <div className="transaction-header">
                                <div className="date-view">
                                    <div className="view-day">
                                        16
                                    </div>
                                    <div className="view-date">
                                        <div className="day">Thứ sáu</div>
                                        <div className="months">Tháng bảy 2021</div>
                                    </div>
                                </div>
                                <div className="amount-view">
                                    <div className="amount">+17,578,000</div>
                                </div>
                            </div>
                            <div className="transaction-detail">
                                <div className="item">
                                    <div className="item-image">
                                        <img src="./assets/mobile.png" alt="mobile" />
                                    </div>
                                    <div className="title">
                                        <div className="title-top">Thiết bị điện tử</div>
                                        <div className="title-bot">
                                            2 dây Vga
                                        </div>
                                    </div>
                                    <div className="amount income">
                                        17,578,000
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={isShowDetail ? "transaction-right active" : "transaction-right"}>
                    <div className="header">
                        <div className="header-left">
                            <img src="./assets/close.svg" alt="close" className="close-detail"
                                onClick={() => setIsShowDetail(false)} />
                            <p>Chi tiết</p>
                        </div>
                        <div className="header-right">
                            <div className="button-method">
                                <span className="btn btn-delete">Xóa</span>
                                <span className="btn btn-edit">Sửa</span>
                            </div>
                        </div>
                    </div>
                    <div className="transaction-detail">
                        <img src="./assets/items/icon12.png" alt="icon" className="transaction-image" />
                        <div>
                            <div className="transaction-name">Mua sắm</div>
                            <div className="transaction-wallet">
                                Ví của Tano
                            </div>
                            <div className="transaction-date">
                                Thứ hai, 19/07/2021
                            </div>
                            <div className="transaction-description">
                                2 hộp muối nha đam
                            </div>
                            <div className="transaction-amount">
                                -150,000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TransactionPage;