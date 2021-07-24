import { useEffect } from 'react';
import './index.scss';
function HelpPage() {

    useEffect(() => {
        const items = document.querySelectorAll('.faq-item .title');
            items.forEach((item: any) => {
                item.addEventListener('click', function() {
                    if (item.parentNode.classList.contains('active')) {
                        item.parentNode.classList.remove('active');
                    } else {
                        item.parentNode.classList.add('active');
                    }
                })
            })
    }, [])

    return (
        <>
            <div className="faq">
                <div className="faq-wrapper">
                    <div className="faq-header">
                        <img src="./assets/faq/top_image.jpg" alt="" />
                        <div className="crop-flip" />
                        <div className="header-body">
                            <h1>Our Support Center</h1>
                            <span>Get the most our of software. Contact us if you don't find what you're looking for</span>
                            <a className="btn btn-send-message">Send message</a>
                        </div>
                    </div>
                    <div className="faq-menu">
                        <ul>
                            <li>
                                <input type="radio" id="ios" name="filter" />
                                <label htmlFor="ios">
                                    <img src="./assets/faq/rsz_ios-home.png" alt="ios" />
                                    <span>IOS</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="mac" name="filter" />
                                <label htmlFor="mac">
                                    <img src="./assets/faq/rsz_mac-home.png" alt="Mac" />
                                    <span>Mac</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="android" name="filter" />
                                <label htmlFor="android">
                                    <img src="./assets/faq/rsz_android-home.png" alt="Android" />
                                    <span>Android</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="window" name="filter" />
                                <label htmlFor="window">
                                    <img src="./assets/faq/rsz_windows-home.png" alt="Windows" />
                                    <span>Windows</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="window-phone" name="filter" />
                                <label htmlFor="window-phone">
                                    <img src="./assets/faq/rsz_windowphone-home.png" alt="Windowphone" />
                                    <span>Window phone</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="Web" name="filter" />
                                <label htmlFor="Web">
                                    <img src="./assets/faq/rsz_web-home.png" alt="Web" />
                                    <span>Web</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="faq-content">
                        <div className="faq-content-group">
                            <div className="group-title">BASIC QUESTIONS</div>
                            <div className="faq-item">
                                <div className="title">
                                    <img src="./assets/down-chevron.svg" alt="" />
                                    What is Money Lover? What can I use it for?
                                </div>
                                <div className="content">
                                    <p>1. Record and categorize expenses/ incomes</p>
                                    <p>2. Create budgets and keep track saving plans.</p>
                                    <p>3. Keep track your debt/ loan.</p>
                                    <p>4. Bill reminders &amp; schedule for recurring transactions..</p>
                                    <p>5. Travel mode for tourists. You can see more user guide blogs at [here](http://note.moneylover.me/hard-to-use-here-are-guides/)</p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <div className="title">
                                    <img src="./assets/down-chevron.svg" alt="" />
                                    Can I use Money Lover in other devices?
                                </div>
                                <div className="content">
                                    <p>Yes, in case you registered Money Lover account. You only need to login in other devices to continue use Money Lover.</p>
                                    <p>We support Android, iOS, Windows Phone, Windows 8.1, 10; MacOS and Web-based.</p>
                                    <p>Cloud service makes Money Lover work seamlessly across all devices.</p>
                                    <p>Android : phone and tablet.</p>
                                    <p>iOS : iPhone, iPad and iPod</p>
                                    <p>Windows : Windows 8.1, Windows 10 and Windows phone.</p>
                                    <p>Mac OS : testing</p>
                                    <p>Web version : web.moneylover.me</p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <div className="title">
                                    <img src="./assets/down-chevron.svg" alt="" />
                                    Can I import CSV or excel files to Money Lover?
                                </div>
                                <div className="content">
                                    <p>We can't support for these options. Sorry for this inconvenience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HelpPage;
