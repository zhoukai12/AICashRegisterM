import React, { Component } from 'react';
import '@/assets/css/Footer.scss'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footerBar">
                <div className="footerTop"></div>
                <div className="footerCenter">
                    <div className="left"></div>
                    <div className="right">
                        <ul>
                            <li>产品</li>
                            <li>AI吧收银APP</li>
                            <li>收款工具</li>
                            <li>API对接</li>
                        </ul>
                        <ul>
                            <li>公司</li>
                            <li>联系我们</li>
                            <li>关于我们</li>
                        </ul>
                        <ul>
                            <li>服务</li>
                            <li>400-886-9999</li>
                            <li>7*24小全年无休</li>
                        </ul>
                    </div>
                </div>
                <div className="line"></div>
                <div className="footerBottom">
                    <p> Thank you for downloading BetterDesk Sketch template. You are invited to join 1300+ designers on UX Design Community on Slack at www.uxdesigncommunity.com<br/>
We look forward to see you there!</p>
                </div>
            </div>
         );
    }
}
 
export default Footer;