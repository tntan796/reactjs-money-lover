import HeaderComponent from "../../components/header";
import MenuComponent from "../../components/menu";
import SideBarComponent from "../../components/sidebar";
import './index.scss';

function DefaultLayout(props: any) {
    return (
        <div className="container">
            <div className="container-wrapper">
                <SideBarComponent></SideBarComponent>
                <MenuComponent></MenuComponent>
                <div className="right">
                    <div className="right-wrapper">
                        <HeaderComponent></HeaderComponent>
                        <div className="main">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;