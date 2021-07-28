import './choose-icon.scss';

function ChooseIconComponent (props: any) {
    
    return (
        <>
            <div className="icons">
                <div className="icon">
                    <input type="radio" id="icon_1" name="icon" value="icon_1" hidden/>
                    <label htmlFor="icon_1" onClick = {() => props.chooseIcon('items/icon_1.png')}>
                        <img src="./assets/items/icon_1.png" alt="icon" />
                    </label>
                </div>
                <div className="icon">
                    <input type="radio" id="icon_2" name="icon" value="icon_2" hidden/>
                    <label htmlFor="icon_2" onClick = {() => props.chooseIcon('items/icon_2.png')}>
                        <img src="./assets/items/icon_2.png" alt="icon" />
                    </label>
                </div>
                <div className="icon">
                    <input type="radio" id="icon_3" name="icon" value="icon_3" hidden/>
                    <label htmlFor="icon_3" onClick = {() => props.chooseIcon('items/icon_3.png')}>
                        <img src="./assets/items/icon_3.png" alt="icon" />
                    </label>
                </div>
                <div className="icon">
                    <input type="radio" id="icon_4" name="icon" value="icon_4" hidden/>
                    <label htmlFor="icon_4" onClick = {() => props.chooseIcon('items/icon_4.png')}>
                        <img src="./assets/items/icon_4.png" alt="icon" />
                    </label>
                </div>
                <div className="icon">
                    <input type="radio" id="icon_5" name="icon" value="icon_5" hidden/>
                    <label htmlFor="icon_5" onClick = {() => props.chooseIcon('items/icon_5.png')}>
                        <img src="./assets/items/icon_5.png" alt="icon" />
                    </label>
                </div>
                <div className="icon">
                    <input type="radio" id="icon_6" name="icon" value="icon_6" hidden/>
                    <label htmlFor="icon_6" onClick = {() => props.chooseIcon('items/icon_5.png')}>
                        <img src="./assets/items/icon_6.png" alt="icon" />
                    </label>
                </div>
                <div className="icon">
                    <input type="radio" id="icon_7" name="icon" value="icon_7" hidden/>
                    <label htmlFor="icon_7" onClick = {() => props.chooseIcon('items/icon_7.png')}>
                        <img src="./assets/items/icon_7.png" alt="icon" />
                    </label>
                </div>
                <div className="icon">
                    <input type="radio" id="icon_8" name="icon" value="icon_8" hidden/>
                    <label htmlFor="icon_8" onClick = {() => props.chooseIcon('items/icon_8.png')}>
                        <img src="./assets/items/icon_8.png" alt="icon" />
                    </label>
                </div>
                <div className="icon">
                    <input type="radio" id="icon_9" name="icon" value="icon_9" hidden/>
                    <label htmlFor="icon_9" onClick = {() => props.chooseIcon('items/icon_9.png')}>
                        <img src="./assets/items/icon_9.png" alt="icon" />
                    </label>
                </div>
                <div className="icon">
                    <input type="radio" id="icon_10" name="icon" value="icon_10" hidden/>
                    <label htmlFor="icon_10" onClick = {() => props.chooseIcon('items/icon_10.png')}>
                        <img src="./assets/items/icon_10.png" alt="icon" />
                    </label>
                </div>
            </div>
        </>
    );
}

export default ChooseIconComponent;