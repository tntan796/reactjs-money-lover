import MenuComponent from "../../components/menu";
import './index.scss';

function DefaultLayout(props: any) {
    return (
        <div className="container">
            <div className="container-wrapper">
                <MenuComponent></MenuComponent>
                <div className="right">
                    <div className="right-wrapper">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;