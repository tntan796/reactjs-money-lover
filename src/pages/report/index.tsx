import { useState } from 'react';
import HeaderComponent from '../../components/header';
import ReportHeaderCenterComponent from '../../components/report-header/center';
import './index.scss';
import { Chart } from 'primereact/chart';
function ReportPage() {

    const [isShowDetail, setIsShowDetail] = useState(false);
    const [isShowDetailItem, setIssShowDetailItem] = useState(false);
    const chartData = {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };

    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };

    return (
        <>
        <HeaderComponent
            center = {
                <ReportHeaderCenterComponent/>
            }
        >
        </HeaderComponent>

        <div className={isShowDetail ? "report active" : "report"}>
            <div className="report-left">
                <div className="balance">
                    <div className="balance-start">
                        <div className="balance-title">Số dư đầu</div>
                        <div className="balance-amount">+312,660,269</div>
                    </div>
                    <div className="balance-end">
                        <div className="balance-title">Số dư đầu</div>
                        <div className="balance-amount">+312,660,269</div>
                    </div>
                </div>
                <div className="chart">
                    <div className="chart-header" onClick = {() => setIsShowDetail(true)}>
                        <div className="chart-title">
                            <div className="title-bar">
                                Thu nhập ròng
                            </div>
                            <div className="amount-bar">
                                +15,503,626
                            </div>
                        </div>
                        <div className="chart-body">
                            <Chart type="bar" data={chartData} />
                        </div>
                    </div>
                </div>
                <div className="donut-chart">
                    <div className="income" onClick = {() => setIsShowDetail(true)}>
                        <div>
                            <p className = "title">Khoản thu</p>
                            <p className = "amount">+17,938,400</p>
                        </div>
                        <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative'}} />
                    </div>
                    <div className="outcome" onClick = {() => setIsShowDetail(true)}>
                        <p className = "title">Khoản chi</p>
                        <p className = "amount">-2.804.774</p>
                        <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative'}} />
                    </div>
                </div>
                <div className="debt-loan">
                    <ul>
                        <li>
                            <p>Nợ</p>
                            <span>
                                <p className="income">0</p>
                                <img src="./assets/right-chevron.svg" alt="right-chevron" className="right-chevron" />
                            </span>
                        </li>
                        <li>
                            <p>Cho vay</p>
                            <span>
                                <p className="expense">0</p>
                                <img src="./assets/right-chevron.svg" alt="right-chevron" className="right-chevron" />
                            </span>
                        </li>
                        <li>
                            <p>Khác</p>
                            <span>
                                <p className="other">0</p>
                                <img src="./assets/right-chevron.svg" alt="right-chevron" className="right-chevron" />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={isShowDetail ? "report-right active" : "report-right"}>
                <div className="header">
                    <div className="header-left">
                        <img src="./assets/close.svg" alt="close" onClick = {() => setIsShowDetail(false)}/>
                        <p>Khoản chi</p>
                    </div>
                    <div className="header-right">
                        <div className="display-type active">
                            <img src="./assets/chart.svg" alt="chart" />
                        </div>
                        <div className="display-type">
                            <img src="./assets/statistical.svg" alt="statistical" />
                        </div>
                    </div>
                </div>
                <div className="chart-wrapper">
                    <div className="chart-content">
                        <div className="chart">
                            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative'}} />
                        </div>
                        <div className="amount">
                            2,254,474
                        </div>
                    </div>
                    <div className="category-list">
                        <ul>
                            <li className="category-item" onClick = {() => setIssShowDetailItem(true)}>
                                <span className="item-left">
                                    <img src="./assets/items/icon10.png" alt="transaction" />
                                    <label>Bạn bè &amp; Người yêu</label>
                                </span>
                                <span className="item-right">
                                    <p className="expense">2356345</p>
                                    <img src="./assets/right-chevron.svg" alt="right-chevron" className="right-chevron" />
                                </span>
                            </li>
                            <li className="category-item" onClick = {() => setIssShowDetailItem(true)}>
                                <span className="item-left">
                                    <img src="./assets/items/icon10.png" alt="transaction" />
                                    <label>Hóa đơn &amp; Tiện ích</label>
                                </span>
                                <span className="item-right">
                                    <p className="expense">23423423</p>
                                    <img src="./assets/right-chevron.svg" alt="right-chevron" className="right-chevron" />
                                </span>
                            </li>
                            <li className="category-item" onClick = {() => setIssShowDetailItem(true)}>
                                <span className="item-left">
                                    <img src="./assets/items/icon10.png" alt="transaction" />
                                    <label>Ăn uống</label>
                                </span>
                                <span className="item-right">
                                    <p className="expense">234234234</p>
                                    <img src="./assets/right-chevron.svg" alt="right-chevron" className="right-chevron" />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Detail */}
                <div className={isShowDetailItem ? "report-detail active" : "report-detail"}>
                    <div className="header">
                        <div className="header-left">
                            <img src="./assets/back.svg" alt="close" id="back-icon"
                                 onClick = {() => setIssShowDetailItem(false)}/>
                            <p>Mua sắm</p>
                        </div>
                        <div className="header-right">
                            <div className="display-type active">
                                <img src="./assets/chart.svg" alt="chart" />
                            </div>
                            <div className="display-type">
                                <img src="./assets/statistical.svg" alt="statistical" />
                            </div>
                        </div>
                    </div>
                    <div className="chart-wrapper">
                        <div className="chart-content">
                            <div className="chart">
                                <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative'}} />
                            </div>
                            <div className="amount">
                                2,254,474
                            </div>
                        </div>
                        <div className="category-list">
                            <ul>
                                <li className="category-item">
                                    <span className="item-left">
                                        <img src="./assets/items/icon10.png" alt="transaction" />
                                        <label>Bạn bè &amp; Người yêu</label>
                                    </span>
                                    <span className="item-right">
                                        <p className="expense">2356345</p>
                                        <img src="./assets/right-chevron.svg" alt="right-chevron" className="right-chevron" />
                                    </span>
                                </li>
                                <li className="category-item">
                                    <span className="item-left">
                                        <img src="./assets/items/icon10.png" alt="transaction" />
                                        <label>Hóa đơn &amp; Tiện ích</label>
                                    </span>
                                    <span className="item-right">
                                        <p className="expense">23423423</p>
                                        <img src="./assets/right-chevron.svg" alt="right-chevron" className="right-chevron" />
                                    </span>
                                </li>
                                <li className="category-item">
                                    <span className="item-left">
                                        <img src="./assets/items/icon10.png" alt="transaction" />
                                        <label>Ăn uống</label>
                                    </span>
                                    <span className="item-right">
                                        <p className="expense">234234234</p>
                                        <img src="./assets/right-chevron.svg" alt="right-chevron" className="right-chevron" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End Detail */}
            </div>
        </div>
        </>
    )
}
export default ReportPage;
