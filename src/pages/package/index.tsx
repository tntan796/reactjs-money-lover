import { useState } from 'react';
import HeaderComponent from '../../components/header';
import './index.scss';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Dialog } from 'primereact/dialog';
import ChooseIconComponent from '../../components/choose-icon/choose-icon';

function PackagePage() {

    const [isShowDetail, setIsShowDetail] = useState(false);
    const [isChooseIcon, setIsChooseIcon] = useState(false);
    const [isEditPackage, setIsEditPackage] = useState(false);

    const chooseIcon = (value: string) => {
        console.log('Choose icon:', value);
        setIsChooseIcon(false);
    }

    return (
        <>
            <HeaderComponent
                center={null}
            >
            </HeaderComponent>
            <div className={isShowDetail ? "package active" : "package"}>
                <div className="package-left">
                    <div className="package-group">
                        <p className="title">Khoản chi</p>
                        <div className="package-list">
                            <div className="package-parent">
                                <div className="package-parent-item" onClick={() => setIsShowDetail(true)}>
                                    <img src="./assets/items/icon_12.png" alt="icon1"/>
                                    <p>Ăn uống</p>
                                </div>
                                <div className="package-child-list">
                                    <div className="package-child-item" onClick={() => setIsShowDetail(true)}>
                                        <img src="./assets/items/icon_11.png" alt="icon1"/>
                                        <p>Nhà hàng</p>
                                    </div>
                                    <div className="package-child-item" onClick={() => setIsShowDetail(true)}>
                                        <img src="./assets/items/icon_10.png" alt="icon1" />
                                        <p>Liên hoan</p>
                                    </div>
                                </div>
                            </div>
                            <div className="package-parent">
                                <div className="package-parent-item" onClick={() => setIsShowDetail(true)}>
                                    <img src="./assets/items/icon_1.png" alt="icon1" />
                                    <p>Ăn uống</p>
                                </div>
                                <div className="package-child-list">
                                    <div className="package-child-item" onClick={() => setIsShowDetail(true)}>
                                        <img src="./assets/items/icon_2.png" alt="icon1" />
                                        <p>Ăn uống</p>
                                    </div>
                                    <div className="package-child-item" onClick={() => setIsShowDetail(true)}>
                                        <img src="./assets/items/icon_3.png" alt="icon1" />
                                        <p>Ăn uống</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="package-group">
                        <p className="title">Khoản thu</p>
                        <div className="package-list">
                            <div className="package-parent">
                                <div className="package-parent-item" onClick={() => setIsShowDetail(true)}>
                                    <img src="./assets/items/icon_4.png" alt="icon1" />
                                    <p>Ăn uống</p>
                                </div>
                                <div className="package-child-list">
                                    <div className="package-child-item" onClick={() => setIsShowDetail(true)}>
                                        <img src="./assets/items/icon_5.png" alt="icon1" />
                                        <p>Nhà hàng</p>
                                    </div>
                                    <div className="package-child-item" onClick={() => setIsShowDetail(true)}>
                                        <img src="./assets/items/icon_6.png" alt="icon1" />
                                        <p>Liên hoan</p>
                                    </div>
                                </div>
                            </div>
                            <div className="package-parent">
                                <div className="package-parent-item" onClick={() => setIsShowDetail(true)}>
                                    <img src="./assets/items/icon_7.png" alt="icon1" />
                                    <p>Ăn uống</p>
                                </div>
                                <div className="package-child-list">
                                    <div className="package-child-item" onClick={() => setIsShowDetail(true)}>
                                        <img src="./assets/items/icon_8.png" alt="icon1" />
                                        <p>Ăn uống</p>
                                    </div>
                                    <div className="package-child-item" onClick={() => setIsShowDetail(true)}>
                                        <img src="./assets/items/icon_9.png" alt="icon1" />
                                        <p>Ăn uống</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={isShowDetail ? "package-right active" : "package-right"}>
                    <div className="package-detail">
                        <div className="header">
                            <div className="header-left">
                                <img src="./assets/close.svg" alt="close" className="closeIcon" onClick={() => setIsShowDetail(false)} />
                                <p>Chi tiết</p>
                            </div>
                            <div className="header-right">
                                <div className="button-method">
                                    <Button label="Xóa" className="p-button-danger p-button-text" />
                                    <Button label="Sửa" className="p-button-success p-button-text" />
                                </div>
                            </div>
                        </div>
                        <div className="detail-content">
                           <img src="./assets/items/icon_34.png" alt="icon5" />
                           <div>
                               <div className="title">Ăn uống</div>
                               <div className="wallet-name">Tiền của Tano</div>
                               <Badge value="Khoản chi" severity="danger">Khoản chi</Badge>
                           </div>
                        </div>
                        <div className="package-group" onClick = {() => setIsEditPackage(true)}>
                            Ghép nhóm
                        </div>
                    </div>
                </div>
            </div>

            <Dialog header="Sửa nhóm" visible={isEditPackage} style={{ width: '50vw' }} onHide={() => setIsEditPackage(false)}>
                <div className="edit-package">
                    <div className="p-grid">
                        <div className="p-col-12">
                            <div className="package-type">Khoản chi</div>
                        </div>
                        <div className="p-col-3">
                            <div className="icon-wrapper group">
                                <img src="./assets/items/icon_2.png" alt="icon" className="icon"/>
                                <img src="./assets/right-chevron.svg" alt="icon" className="chevron-right"/>
                            </div>
                        </div>
                        <div className="p-col-9">
                            <div className="package-name group">
                                <p>Tên nhóm</p>
                                <input type="text" placeholder="Tên nhóm"/>
                            </div>
                        </div>
                        <div className="p-col-6">
                            <div className="wallet group">
                                <p>Tên nhóm</p>
                                <div className="wallet-info">
                                    <img src="./assets/items/icon_2.png" alt="icon" />
                                    <label>Tiền của Tano</label>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-6">
                            <div className="parent group">
                                <p>Tên nhóm</p>
                                <div className="wallet-info">
                                    <img src="./assets/items/icon_2.png" alt="icon" />
                                    <label>Tiền của Tano</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>

            <Dialog header="Header" visible={isChooseIcon} style={{ width: '50vw' }} onHide={() => setIsChooseIcon(false)}>
                <ChooseIconComponent chooseIcon = {chooseIcon}></ChooseIconComponent>
            </Dialog>
        </>
    )
}
export default PackagePage;
