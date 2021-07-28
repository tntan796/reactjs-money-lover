import './style.scss';
import { Dropdown } from 'primereact/dropdown';
import DataDropdownItem from '../../models/dropdown-item.model';

class DropdownProps {
    value: any;
    options: DataDropdownItem[] = [];
    action: any;
    optionLabel: any;
    filterBy: any;
    placeholder: any;
}

function CustomDropdown(props: DropdownProps) {
    
    const optionTemplate = (option: DataDropdownItem) => {
        return (
            <div className="dropdown-item">
                <img alt={option?.Name} src={`./assets/${option?.Icon}`} className={`flag flag-${option?.Id + ''}`} />
                <div className = "dropdown-detail">
                    <div className = "wallet-name">{option?.Name}</div>
                    <div className = "wallet-amount">{option?.Description}</div>
                </div>
            </div>
        );
    }

    const selectedTemplate = (option: DataDropdownItem, props: { placeholder: string }) => {
        // Nếu có option => Đã chọn => Hiển thị option, ngược lại thì hiển thị place holder
        if (option) {
            return (
                <div className="dropdown-item selected">
                    <img alt={option?.Name} src={`./assets/${option?.Icon}`} />
                    <div className = "wallet-name">{option?.Name}</div>
                </div>
            );
        }
        return (
            <span className = "dropdown-item selected">
                <img alt="image" src='./assets/wallet.png'/>
                <div className = "">{props?.placeholder}</div>
            </span>
        );
    }


    return (
        <>
            <Dropdown
                value={props.value}
                options={props.options}
                onChange={(e: any) => props.action(e.value)}
                optionLabel={props.optionLabel}
                filter
                showClear
                filterBy={props.filterBy}
                placeholder={props.placeholder}
                valueTemplate={selectedTemplate}
                itemTemplate={optionTemplate} />
        </>
    );
}

export default CustomDropdown;