import './index.scss';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
function MyWallet() {

    const [displayBasic, setDisplayBasic] = useState(false);
    const [typeContentWallet, setTypeContentWallet] = useState(1);

    const renderDynamicContentDialog = (type: number) => {
        switch (type) {
            case 1:
                return (
                    <div id="shareWalletContent" className="modal-content">
                        <div className="header">Chia sẻ ví</div>
                        <div className="email">
                            <img src="./assets/email.svg" alt="email" />
                            <input type="text" placeholder="Email của mọi người mà bạn muốn chia sẻ" />
                        </div>
                        <div className="message">
                            <img src="./assets/message.svg" alt="" />
                            <textarea rows={5} placeholder="Tin nhắn" defaultValue={""} />
                        </div>
                        <div className="button-wrapper">
                            <button className="btn btn-cancel">Hủy</button>
                            <button className="btn btn-save">Xong</button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div id="transferMoneyContent" className="modal-content">
                        <div className="header">Chuyển tiền đến ví khác</div>
                        <div className="content">
                            <div className="title">
                                Từ
                            </div>
                            <div className="group">
                                <div className="item">
                                    <label>Ví</label>
                                    <div className="item-content">
                                        <img src="./assets/items/icon15.png" alt="" />
                                        <div className="right">
                                            <p>Tiền cũ</p>
                                            <img src="./assets/right-chevron.svg" alt="right-chevron" className="right-chevron" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <label>Nhóm</label>
                                    <div className="item-content">
                                        <img src="./assets/items/icon13.png" alt="" />
                                        <div className="right">
                                            <p>Nhà hàng</p>
                                            <img src="./assets/right-chevron.svg" alt="right-chevron" className="right-chevron" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <label>Số tiền</label>
                                    <div className="item-content">
                                        <div className="right">
                                            <input type="text" defaultValue={0} className="money" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="title"> Đến </div>
                            <div className="group">
                                <div className="item">
                                    <label>Nhóm</label>
                                    <div className="item-content">
                                        <img src="./assets/items/icon13.png" alt="" />
                                        <div className="right">
                                            <p>Nhà hàng</p>
                                            <img src="./assets/right-chevron.svg" alt="right-chevron" className="right-chevron" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <label>Nhóm</label>
                                    <div className="item-content">
                                        <img src="./assets/items/icon13.png" alt="" />
                                        <div className="right">
                                            <p>Tiền lãi</p>
                                            <img src="./assets/right-chevron.svg" alt="right-chevron" className="right-chevron" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <label>Ngày</label>
                                    <div className="item-content">
                                        <div className="right">
                                            <Calendar id="icon" showIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group">
                                <div className="item item-note">
                                    <label>Ghi chú</label>
                                    <div>
                                        <input type="text" placeholder="Nội dung ghi chú" />
                                    </div>
                                </div>
                            </div>
                            <div className="count-to-report">
                                <input type="checkbox" />
                                <div>
                                    <p className="title">Không tính vào báo cáo</p>
                                    <p className="description">Các giao dịch này sẽ được loại khỏi báo cáo ở cả hai ví</p>
                                </div>
                            </div>
                            <div className="add-fee-transfer">
                                <input type="checkbox" />
                                <div>
                                    <p className="title">Thêm phí chuyển khoán</p>
                                </div>
                            </div>
                            <div className="button-wrapper">
                                <button className="btn btn-cancel">Hủy</button>
                                <button className="btn btn-success">Xong</button>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div id="adjustAmountContent" className="modal-content">
                        <div className="header">Điều chỉnh số dư</div>
                        <div className="content">
                            <div className="wallet">
                                <label>Ví</label>
                                <div className="wallet-right">
                                    <img src="./assets/items/icon12.png" alt="icon" className="wallet-icon" />
                                    <div className="wallet-content">
                                        <label>Tiền của Tano</label>
                                        <img src="./assets/right-chevron.svg" alt="" className="chevron-right" />
                                    </div>
                                </div>
                            </div>
                            <div className="amount">
                                <label>Nhập số dư hiện tại của ví</label>
                                <div>
                                    <input type="text" defaultValue={124234} />
                                </div>
                            </div>
                            <div className="not-for-report">
                                <input type="checkbox" />
                                <div>
                                    <div className="title">Không tính vào báo cáo</div>
                                    <div className="description">Bỏ qua ví này và số dư khỏi tổng</div>
                                </div>
                            </div>
                            <div className="button-wrapper">
                                <button className="btn btn-cancel">Hủy</button>
                                <button className="btn btn-cancel">Xong</button>
                            </div>
                        </div>
                    </div>
                );
        }
    }

    const [isShowDetail, setIsShowDetail] = useState(false);

    return (
        <>
            <div className={isShowDetail ? "my-wallet active" : "my-wallet"}>
                <div className="my-wallet-left">
                    <div className="wallet-list">
                        <div className="wallet-item" onClick = {() => setIsShowDetail(true)}>
                            <div className="title">Tính vào tổng</div>
                            <div className="wallet-item--content">
                                <img src="./assets/wallet.svg" alt="wallet" />
                                <div>
                                    <div>Tiền cũ</div>
                                    <div>0</div>
                                </div>
                            </div>
                        </div>
                        <div className="wallet-item" onClick = {() => setIsShowDetail(true)}>
                            <div className="title">Tính vào tổng</div>
                            <div className="wallet-item--content">
                                <img src="./assets/wallet.svg" alt="wallet" />
                                <div>
                                    <div>Tiền cũ</div>
                                    <div>0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={isShowDetail ? "my-wallet-right active" : "my-wallet-right"}>
                    <div className="header">
                        <div className="header-left">
                            <img src="./assets/close.svg" alt="close"  onClick = {() => setIsShowDetail(false)}/>
                            <p>Chi tiết</p>
                        </div>
                        <div className="header-right">
                            <div className="button-method">
                                <span className="btn btn-delete">Xóa</span>
                                <span className="btn btn-edit">Sửa</span>
                            </div>
                        </div>
                    </div>
                    <div className="detail-content">
                        <div className="wallet-info">
                            <img src="./assets/wallet.svg" alt="" />
                            <div>
                                <div className="wallet-name">Tiền của Tano</div>
                                <div className="wallet-currency">Việt Nam Đồng</div>
                            </div>
                        </div>
                        <div className="user">
                            <label>Người dùng</label>
                            <div className="user-info">
                                <img src="./assets/wallet.svg" alt="" />
                                <div>
                                    <div className="user-name">tantano96</div>
                                    <div className="user-email">tantanotnt96@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div className="method">
                            <div className="method-item">
                                <input type="checkbox" />
                                <div>
                                    <div className="not-count-total">Không tính vào tổng</div>
                                    <div>Bỏ qua ví này và số dư khỏi "tổng"</div>
                                </div>
                            </div>
                            <div className="method-item">
                                <input type="checkbox" />
                                <div>
                                    <div className="not-count-total">Không tính vào tổng</div>
                                    <div>Bỏ qua ví này và số dư khỏi "tổng"</div>
                                </div>
                            </div>
                        </div>
                        <div className="share">
                            <ul>
                                <li id="share-wallet" onClick={() => { setDisplayBasic(true); setTypeContentWallet(1); }}>Chia sẻ ví</li>
                                <li id="transfer-money" onClick={() => { setDisplayBasic(true); setTypeContentWallet(2); }}>Chuyển tiền</li>
                                <li id="adjustContent" onClick={() => { setDisplayBasic(true); setTypeContentWallet(3); }}>Điều chỉnh số dư</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog header="Chia sẻ ví" visible={displayBasic} style={{ width: '50vw' }} onHide={() => setDisplayBasic(false)}>
                {renderDynamicContentDialog(typeContentWallet)}
            </Dialog>
        </>
    )
}
export default MyWallet;
