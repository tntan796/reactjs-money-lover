import { useState } from 'react';
import HeaderComponent from '../../components/header';
import './index.scss';
import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';
import TransactionRightHeader from '../../components/transaction/right-header';
import { Button } from 'primereact/button';

function TransactionPage() {

    const [isShowDetail, setIsShowDetail] = useState(false)
    const [isShowAdd, setIsShowAdd] = useState(false);
    const [isShowWallet, setIsShowWallet] = useState(false);

    const addTransaction = () => {
        setIsShowAdd(true);
    }

    return (
        <>
            <HeaderComponent
                center = {null}
                right = {<TransactionRightHeader addTransaction = {() => addTransaction()}/>}
            ></HeaderComponent>

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

            <Dialog header="Chọn ví" visible={isShowWallet} style={{ width: '50vw' }} onHide={() => setIsShowWallet(false)}>
                <div className="choose-wallet">
                    <div className="wallet-title">Tính vào tổng</div>
                    <div className="wallet">
                        <div className="wallet-detail" onClick = {() => {setIsShowWallet(false); }}>
                            <img src="./assets/items/icon_2.png" alt="icon_2"/>
                            <div>
                                <div className="wallet-name">Tiền cũ</div>
                                <div className="wallet-money">0</div>
                            </div>
                        </div>
                    </div>
                    <div className="wallet-title">Tính vào tổng</div>
                    <div className="wallet">
                        <div className="wallet-detail" onClick = {() => {setIsShowWallet(false); }}>
                            <img src="./assets/items/icon_2.png" alt="icon_2" />
                            <div>
                                <div className="wallet-name">Tiền của Tano</div>
                                <div className="wallet-money">54654562</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>

            <Dialog header="Thêm mới giao dịch" visible={isShowAdd} style={{ width: '80vw' }} onHide={() => setIsShowAdd(false)}>
                <div className="transaction-form">
                    <div className="add-transaction">
                        <form>
                            <div className="p-grid">
                                <div className="p-sm-12 p-md-4">
                                    <div className="dropdown">
                                        <div className="dropdown-menu" onClick = {() => setIsShowWallet(true)}>
                                            <label className="dropdown-title">Ví</label>
                                            <div className="dropdown-item">
                                                <img className="dropdown-item--icon" src="../../assets/items/icon_2.png" alt="icon" />
                                                <div className="dropdown-item--text">
                                                    <label>Tiền của Tano</label>
                                                    <img src="../../assets/right-chevron.svg" alt="" className="icon-chevron" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-sm-12 p-md-4">
                                    <div className="dropdown">
                                        <div className="dropdown-menu" onClick = {() => setIsShowWallet(true)}>
                                            <label className="dropdown-title">Nhóm</label>
                                            <div className="dropdown-item">
                                                <img className="dropdown-item--icon" src="../../assets/items/icon_5.png" alt="icon" />
                                                <div className="dropdown-item--text">
                                                    <label>Tiền của Tano</label>
                                                    <img src="../../assets/right-chevron.svg" alt="" className="icon-chevron" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-sm-12 p-md-4">
                                    <div className="form-input-group">
                                        <label>Số tiền</label>
                                        <div className="select-item">
                                            <input type="number" defaultValue={0} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-sm-12 p-md-4">
                                    <div className="form-input-group">
                                        <label>Ngày</label>
                                        <div className="select-item">
                                            <Calendar id="icon" style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-sm-12 p-md-8">
                                    <div className="form-input-group">
                                        <label>Ghi chú</label>
                                        <div className="select-item">
                                            <div className="select-item--right">
                                                <input type="text" placeholder="Ghi chú" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-grid">
                                <div className = "p-sm-12">
                                    <span>Thêm chi tiết</span>
                                </div>
                            </div>
                            <div className="p-grid">
                                <div className="p-sm-12 p-md-8">
                                    <div className="p-grid">
                                        <div className="p-sm-12 p-md-6">
                                            <div className="form-input-group">
                                                <label>Ghi chú</label>
                                                <div className="select-item">
                                                    <input type="text" placeholder="Với" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-sm-12 p-md-6">
                                            <div className="form-input-group">
                                                <label>Nhắc nhở</label>
                                                <div className="select-item">
                                                    <input type="text" placeholder="Đặt nhắc nhở" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-sm-12 p-md-6">
                                            <div className="form-input-group">
                                                <label>Địa điểm</label>
                                                <div className="select-item">
                                                    <input type="text" placeholder="Địa điểm" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-sm-12 p-md-6">
                                            <div className="dropdown">
                                                <div className="dropdown-menu" onClick = {() => setIsShowWallet(true)}>
                                                    <label className="dropdown-title">Sự kiện</label>
                                                    <div className="dropdown-item">
                                                        <img className="dropdown-item--icon" src="../../assets/items/icon_8.png" alt="icon" />
                                                        <div className="dropdown-item--text">
                                                            <label>Tiền của Tano</label>
                                                            <img src="../../assets/right-chevron.svg" alt="" className="icon-chevron" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-sm-12 p-md-4">
                                    <div className="form-input-group image">
                                        <span>Ảnh</span>
                                        <span>Thả các tập tin đính kèm <a href="!#">Tại đây</a> </span>
                                        <span>Định dạng tập tin hình ảnh JPG, JPGE, PNG, GIF</span>
                                        <span>Hình ảnh có dung lượng nhỏ hơn 2MB</span>
                                    </div>
                                </div>
                                <div className="p-sm-12 col-md-12 not-include-report">
                                    <input type="checkbox" />
                                    <span>
                                        <div className="report-title">Không tính vào báo cáo</div>
                                        <div className="report-description">Không tính giao dịch này trong các báo cáo, ví dụ như Tổng quan</div>
                                    </span>
                                </div>
                                <div className="p-sm-12 col-md-12 btn-wrapper">
                                    <Button label="Hủy" className="p-button-text" />
                                    <Button label="Lưu" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default TransactionPage;