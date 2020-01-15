import React, { Component } from 'react';
import Img1 from '@/assets/images/chanpin/chanpin2_2.png'
import Img2 from '@/assets/images/chanpin/chanpin2_3.png'
import Img3 from '@/assets/images/chanpin/chanpin2_5.png'
import './PaymentCode.scss'
// 收款码
class PaymentCode extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='paymentcodeWarpper'>
                <div className="model model1">
                    <h1>0成本接入移动支付</h1>
                    <h6>收款码免费赠送，并可联系区域服务专员免费上门开通 ，支持支付宝、微信、QQ、京东等支付方式。</h6>
                    <img src={Img1} alt="" />
                </div>
                <div className="model model2">
                    <h1>产品轻便，可移动收款</h1>
                    <h6>收款码台卡可放置于柜台，也可拿到顾客面前完成收款，收款码贴纸可张贴于店铺各处收款。</h6>
                    <img src={Img2} alt="" />
                </div>
                <div className="item">
                    <img src={Img3} alt=""/>
                    <h1>灵活展示<br/>可贴可放不挑地儿</h1>
                    <h6>二维码可以放置于收银台，也能张贴在墙面或桌角等处，展示方式更灵活。</h6>
                </div>
            </div>
        );
    }
}

export default PaymentCode;