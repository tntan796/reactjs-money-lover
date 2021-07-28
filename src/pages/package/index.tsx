import { useEffect, useRef, useState } from 'react';
import HeaderComponent from '../../components/header';
import './index.scss';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Dialog } from 'primereact/dialog';
import ChooseIconComponent from '../../components/choose-icon/choose-icon';
import { RadioButton } from 'primereact/radiobutton';
import PackageModel from '../../models/package.model';
import packageService from '../../services/package.service';
import { Toast } from 'primereact/toast';

function PackagePage() {

    const [isShowDetail, setIsShowDetail] = useState(false);
    const [isChooseIcon, setIsChooseIcon] = useState(false);
    const [isEditPackage, setIsEditPackage] = useState(false);
    const [packageModel, setPackageModel] = useState(new PackageModel());
    const [packageList, setPackageList] = useState<PackageModel[]>([]);
    const [field, setField] = useState('');

    const toast: any = useRef(null);

    const convertToTree = (data: PackageModel[]): PackageModel[] => {
        return data.filter(t => t.ParentId == null).map(item => {
            item.Childs = data.filter(a => a.ParentId == item.Id)
            return item;
        });
    }

    const fetchData = () => {
        packageService.getPackages().then(response => {
            const data = convertToTree(response.data.Data.Data);
            setPackageList(data);
        }).catch(error => {
            toast.current.show({ severity: 'error', summary: 'Error', detail: error });
        });
    }

    useEffect(() => {
        fetchData();
    }, [])

    const chooseIcon = (value: string) => {
        setPackageModel({...packageModel, [field]: value})
        setIsChooseIcon(false);
    }

    const handleAddPackage = () => {
        setIsEditPackage(true);
        setPackageModel(new PackageModel());
    }

    const selectedItem = (pack: PackageModel) => {
        setPackageModel(pack);
    }

    const packageElms = packageList.map(pack => (
        <div className="package-parent">
            <div className="package-parent-item" onClick={() => setIsShowDetail(true)}>
                <img src={`./assets/${pack.Icon}`} alt={pack.Id + ""} />
                <p>{pack?.Name}</p>
            </div>
            <div className="package-child-list">
                {
                    pack.Childs.map(subPack => (
                        <div className="package-child-item" onClick={() => setIsShowDetail(true)}>
                            <img src={`./assets/${subPack.Icon}`} alt={subPack.Id + ""} />
                            <p>{subPack?.Name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    ));

    return (
        <>
            <HeaderComponent
                center={null}
                right={
                    <Button className="btn-add-package" label="Thêm nhóm" onClick={() => handleAddPackage()} />
                }
            >
            </HeaderComponent>
            <Toast ref={toast} />
            <div className={isShowDetail ? "package active" : "package"}>
                <div className="package-left">
                    <div className="package-group">
                        <p className="title">Khoản chi</p>
                        <div className="package-list">
                            {packageElms}
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
                        <div className="package-group" onClick={() => setIsEditPackage(true)}>
                            Ghép nhóm
                        </div>
                    </div>
                </div>
            </div>

            <Dialog header="Nhóm" visible={isEditPackage} style={{ width: '50vw' }} onHide={() => setIsEditPackage(false)}>
                <div className="edit-package">
                    <div className="p-grid">
                        <div className="p-col-12">
                            <span>
                                <RadioButton inputId="income" name="IsIncome" value={true} onChange={(e) => setPackageModel({...packageModel, IsIncome: false})} checked={packageModel.IsIncome} />
                                <label htmlFor="income"> Khoản thu</label>
                            </span>
                            <span className="p-ml-2">
                                <RadioButton inputId="outcome" name="IsIncome" value={false} onChange={(e) => setPackageModel({...packageModel, IsIncome: false})} checked={!packageModel.IsIncome} />
                                <label htmlFor="outcome"> Khoản chi</label>
                            </span>
                        </div>
                        <div className="p-col-3">
                            <div className="icon-wrapper group" onClick = {() => {setIsChooseIcon(true); setField('Icon')}}>
                                <img src = {`./assets/${packageModel.Icon}`} alt = {packageModel.Id + ""} className="icon" />
                                <img src="./assets/right-chevron.svg" alt="icon" className="chevron-right" />
                            </div>
                        </div>
                        <div className="p-col-9">
                            <div className="package-name group">
                                <p>Tên nhóm</p>
                                <input type="text" placeholder="Tên nhóm" />
                            </div>
                        </div>
                        <div className="p-col-6">
                            <div className="wallet group">
                                <p>Ví</p>
                                <div className="wallet-info">
                                    <img src="./assets/items/icon_2.png" alt="icon" />
                                    <label>Tiền của Tano</label>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-6">
                            <div className="parent group">
                                <p>Nhóm cha</p>
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
                <ChooseIconComponent chooseIcon={chooseIcon}></ChooseIconComponent>
            </Dialog>
        </>
    )
}
export default PackagePage;
