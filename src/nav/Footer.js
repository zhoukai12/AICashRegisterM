import React, { Component } from 'react';
import imgLogo1 from '@/assets/images/footer/qq.png'
import imgLogo2 from '@/assets/images/footer/vx.png'
import imgLogo3 from '@/assets/images/footer/yx.png'
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
                    <div className="logo"></div>
                    <div className="phone">电话：12033330000</div>
                    <div className="address">
                        地址：西安市未央区凤城十二路富尔顿国际中心
                    </div>
                    <div className="btnBox">
                        <img src={imgLogo1} alt=""/>
                        <img src={imgLogo2} alt=""/>
                        <img src={imgLogo3} alt=""/>
                    </div>
                    <div className="copyright">
                    © Copyright 2017. All rights reserved
                    </div>
                </div>
            
            </div>
         );
    }
}
 
export default Footer;