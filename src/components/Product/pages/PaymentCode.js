import React, { Component } from 'react';
import './PaymentCode.scss'
// 收款码
class PaymentCode extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='paymentcodeWarpper'>
                <div className="title">
                    <div className="center">
                        <h1>AI吧收银收款码<br/> 一码搞定移动支付</h1>
                        <h2>特别推荐：快餐、烧烤、小吃店、便利店、<br/>小超市、社区商店等消费者到店消费的商家使用</h2>
                    </div>
                </div>
                <div className="content">
                    <div className="model model1">
                        <div className="center">
                            <div className="top">0成本接入移动支付</div>
                            <div className="text">收款码免费赠送，并可联系区域服务专员免费上门开通<br/>支持支付宝、微信、QQ、京东等支付方式。</div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="model model2">
                        <div className="center">
                            <div className="top">产品轻便，可移动收款</div>
                            <div className="text">收款码台卡可放置于柜台，也可拿到顾客面前完成收款<br/>收款码贴纸可张贴于店铺各处收款。</div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="model model3">
                         <div className="center">
                            <h2>灵活展示<br/>可贴可放不挑地儿</h2>
                            <h3>二维码可以放置于收银台，也能张贴在墙面或桌角等处，展示方式更灵活。</h3>
                         </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PaymentCode;